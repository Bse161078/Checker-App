import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model, Types } from "mongoose";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ITokenPayload } from "src/common/interfaces/jwt.interface";
import { User, UserDocument } from "src/modules/user/entities/user.entity";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
         @InjectModel(User.name) private readonly userRepository: Model<UserDocument>
    ) {
        super({
            ignoreExpiration: false,
            secretOrKey: process.env.ACCESS_TOKEN_SECRET,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        })
    }
    async validate(payload: ITokenPayload): Promise<User| null > {
        const { sub } = payload; 
        const user = await this.userRepository.findOne({ _id: new Types.ObjectId(sub) }).populate('hotel');
        if (!user || !user.accessToken) throw new UnauthorizedException()
        return user;
    }
}

