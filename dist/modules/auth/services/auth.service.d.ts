/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { Model, Types } from "mongoose";
import { ROLES } from "src/common/enums/role.enum";
import { User, UserDocument } from "../../user/entities/user.entity";
import { LoginDto } from "../dto/login.dto";
import { RegisterDto } from "../dto/register.dto.ts";
export declare class AuthService {
    private readonly userRepository;
    private jwtService;
    constructor(userRepository: Model<UserDocument>, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
        role: ROLES;
    }>;
    register(registerDto: RegisterDto | any): Promise<import("mongoose").Document<unknown, any, UserDocument> & User & Document & Required<{
        _id: Types.ObjectId;
    }>>;
    signJwt(payload: any): Promise<string>;
    verifyJwt(token: string): Promise<any>;
    hashPassword(data: string): string;
    comparePassword(data: string, password: string): boolean;
    extractTokenAsBearer(bearerToken: string): string;
    getTokenFromRequestAsBearer(req: Request): string;
}
