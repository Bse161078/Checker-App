import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";

export const GetUser = createParamDecorator((data, context: ExecutionContext): Express.User => {
    const request : Request = context.switchToHttp().getRequest<Request>();
    const user: Express.User = request.user;
    return user
})