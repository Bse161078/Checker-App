import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { InjectModel } from "@nestjs/mongoose";
import { Request, Response } from "express";
import { Model } from "mongoose";
import { ROLES_KEY } from "src/common/decorators/role.decorator";
import { ROLES } from "src/common/enums/role.enum";
import { User, UserDocument } from "src/modules/user/entities/user.entity";

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        @InjectModel(User.name) private userRepository: Model<UserDocument>,
       
    ){}
    async canActivate(context: ExecutionContext) {
        const requiredRoles = this.reflector.getAllAndOverride<ROLES[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ]);
        const req: Request | any = context.switchToHttp().getRequest<Request>();
        const user = await this.userRepository.findOne({_id: req?.user?._id }).populate('hotel');
        const userRole = user.role;
        if(!requiredRoles || requiredRoles.length == 0) return true;
        const accessResult = requiredRoles.some(role => role == userRole);
        if(accessResult) return accessResult;
        throw new ForbiddenException();
    }
}