import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Model } from "mongoose";
import { UserDocument } from "src/modules/user/entities/user.entity";
export declare class RoleGuard implements CanActivate {
    private reflector;
    private userRepository;
    constructor(reflector: Reflector, userRepository: Model<UserDocument>);
    canActivate(context: ExecutionContext): Promise<true>;
}
