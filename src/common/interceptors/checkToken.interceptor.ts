import { CallHandler, ExecutionContext, Injectable, NestInterceptor, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Request } from "express";
import { Model, Types } from "mongoose";
import { Observable } from "rxjs";
import { AuthService } from "src/modules/auth/services/auth.service";
import { User, UserDocument } from "src/modules/user/entities/user.entity";

@Injectable()
export default class CheckTokenInterceptor implements NestInterceptor {
    constructor(
        @InjectModel(User.name) private readonly userRepository: Model<UserDocument>,
        private authService: AuthService
    ) {}
    async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
        const req: Request = context.switchToHttp().getRequest<Request>();
        const token = this.authService.getTokenFromRequestAsBearer(req);
        const {sub} = await this.authService.verifyJwt(token)
        const user = await this.userRepository.findOne({_id: new Types.ObjectId(sub)});
        if (!user) throw new UnauthorizedException();
        if(user.accessToken !== token) {
            throw new UnauthorizedException("Login to your account again");
        }
        req.user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            role: user.role,
            accessToken: user.accessToken
        }
        return next.handle().pipe()
    }
}