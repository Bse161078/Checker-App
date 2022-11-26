import { CallHandler, ExecutionContext, Injectable, NestInterceptor, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Request } from "express";
import { Model } from "mongoose";
import { Observable } from "rxjs";
import { User, UserDocument } from "src/modules/user/entities/user.entity";
import { getTokenFromRequestAsBearer, verifyAccessToken } from "../utils/auth";

@Injectable()
export default class CheckTokenInterceptor implements NestInterceptor {
    constructor(
        @InjectModel(User.name) private readonly userRepository: Model<UserDocument>
    ) {}
    async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
        const req: Request = context.switchToHttp().getRequest<Request>();
        const token = getTokenFromRequestAsBearer(req);
        const {email} = verifyAccessToken(token);
        const user = await this.userRepository.findOne({email})
        if (!user) throw new UnauthorizedException();
        if(user.accessToken !== token) {
            throw new UnauthorizedException("Login to your account again");
        }
        req.user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            role: user.role,
            permissions: user.permissions,
            accessToken: user.accessToken
        }
        return next.handle().pipe()
    }
}