import { AuthService } from "./services/auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto.ts";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: LoginDto): Promise<{
        loginResult: {
            accessToken: string;
            role: import("../../common/enums/role.enum").ROLES;
        };
    }>;
    register(body: RegisterDto): Promise<{
        registerResult: import("mongoose").Document<unknown, any, import("../user/entities/user.entity").UserDocument> & import("../user/entities/user.entity").User & Document & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
    checkLogin(user: Express.User): Promise<{
        user: Express.User;
    }>;
}
