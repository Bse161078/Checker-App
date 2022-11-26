import { compareSync, genSaltSync, hashSync } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import { config } from "dotenv"
import { TokenPayload } from "src/modules/auth/types/auth.type";
import { BadRequestException, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { ResponseMessages } from "../enums";
import { isObject } from "class-validator";
config();

export function hashPassword(data: string): string {
    const salt = genSaltSync(10);
    return hashSync(data, salt)
}
export function comparePassword(data: string, password: string): boolean {
    return compareSync(data, password)
}
export function accessTokenGenrator(payload: TokenPayload): string {
    const { ACCESS_TOKEN_EXPIRES_IN } = process.env;
    return sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRES_IN });
}
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
export function verifyAccessToken(token: string) {
    const verifyResult = verify(token, process.env.ACCESS_TOKEN_SECRET)
    if (isObject(verifyResult) && verifyResult.email) return verifyResult;
    throw new BadRequestException(verifyResult ?? ResponseMessages.SOMETHING_WENT_WRONG);
}
