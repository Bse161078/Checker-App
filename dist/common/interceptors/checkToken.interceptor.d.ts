import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Model } from "mongoose";
import { Observable } from "rxjs";
import { AuthService } from "src/modules/auth/services/auth.service";
import { UserDocument } from "src/modules/user/entities/user.entity";
export default class CheckTokenInterceptor implements NestInterceptor {
    private readonly userRepository;
    private authService;
    constructor(userRepository: Model<UserDocument>, authService: AuthService);
    intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>>;
}
