import { Model } from "mongoose";
import { UserDocument } from "../user/entities/user.entity";
import { LoginDto } from "./dto/login.dto";
export declare class AuthService {
    private readonly userRepository;
    constructor(userRepository: Model<UserDocument>);
    login(loginDto: LoginDto): Promise<void>;
}
