import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import { compareSync, genSaltSync, hashSync } from "bcrypt";
import { Request } from "express";
import { Model, Types } from "mongoose";
import { ROLES } from "src/common/enums/role.enum";
import { User, UserDocument } from "../../user/entities/user.entity";
import { LoginDto } from "../dto/login.dto";
import { RegisterDto } from "../dto/register.dto.ts";

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private readonly userRepository: Model<UserDocument>,
        private jwtService: JwtService
    ) { }

    async login(loginDto: LoginDto) {
        const user = await this.userRepository.findOne({ username: loginDto.username });
        if (!user) throw new UnauthorizedException("username or password is incorrect")
        if (!this.comparePassword(loginDto.password, user.password)) {
            throw new UnauthorizedException("username or password is incorrect")
        }
        const payload = { sub: user._id.toString() }
        const accessToken = await this.signJwt(payload);
        user.accessToken = accessToken;
        user.role = user.role ?? ROLES.USER
        await user.save();
        return {
            accessToken,
            role: user.role
        }
    }
    async register(registerDto: RegisterDto | any) {
        if (await this.userRepository.count() == 0) {
            registerDto._id = new Types.ObjectId('6394666596c86815d3ccef30')
        }
        const user = await this.userRepository.findOne({ username: registerDto.username });
        if (user) throw new UnauthorizedException("username already exist");
        registerDto.password = this.hashPassword(registerDto.password);
        const userDto = Object.assign(registerDto, { role: ROLES.USER })
        return await this.userRepository.create(userDto)
    }

    async signJwt(payload: any) {
        const { ACCESS_TOKEN_EXPIRES_IN: expiresIn, ACCESS_TOKEN_SECRET: secret } = process.env;
        return this.jwtService.sign(payload, { expiresIn, secret })
    }
    async verifyJwt(token: string): Promise<any> {
        const { ACCESS_TOKEN_SECRET: secret } = process.env;
        return this.jwtService.verify(token, { secret })
    }
    hashPassword(data: string): string {
        const salt = genSaltSync(10);
        return hashSync(data, salt)
    }
    comparePassword(data: string, password: string): boolean {
        return compareSync(data, password)
    }
    extractTokenAsBearer(bearerToken: string) {
        const [bearer, token] = bearerToken?.split(' ') || [undefined, undefined];
        if (!token || !bearer) throw new UnauthorizedException();
        if (bearer?.toLowerCase() !== 'bearer') throw new UnauthorizedException();
        return token;
    }
    getTokenFromRequestAsBearer(req: Request) {
        const token: string | undefined = req?.headers?.authorization;
        return this.extractTokenAsBearer(token);
    }
}