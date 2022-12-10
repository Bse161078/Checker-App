import { compareSync, genSaltSync, hashSync } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import { config } from "dotenv"
import { TokenPayload } from "src/modules/auth/types/auth.type";
import { BadRequestException, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { ResponseMessages } from "../enums";
import { isObject } from "class-validator";
config();

export function extractTokenAsBearer(bearerToken: string) {
    const [bearer, token] = bearerToken?.split(' ') || [undefined, undefined];
    if (!token || !bearer) throw new UnauthorizedException();
    if (bearer?.toLowerCase() !== 'bearer') throw new UnauthorizedException();
    return token;
}
export function getTokenFromRequestAsBearer(req: Request) {
    const token: string | undefined = req?.headers?.authorization;
    return extractTokenAsBearer(token);
}