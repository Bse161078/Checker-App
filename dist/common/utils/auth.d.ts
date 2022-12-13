import { Request } from "express";
export declare function extractTokenAsBearer(bearerToken: string): string;
export declare function getTokenFromRequestAsBearer(req: Request): string;
