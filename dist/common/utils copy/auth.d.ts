import { TokenPayload } from "src/packages/auth/types/auth.type";
import { Request } from "express";
export declare function hashPassword(data: string): string;
export declare function comparePassword(data: string, password: string): boolean;
export declare function accessTokenGenrator(payload: TokenPayload): string;
export declare function extractTokenAsBearer(bearerToken: string): string;
export declare function getTokenFromRequestAsBearer(req: Request): string;
export declare function verifyAccessToken(token: string): object;
