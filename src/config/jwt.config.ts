import { JwtModuleOptions } from "@nestjs/jwt";
import { config } from "dotenv";
config()
export function jwtConfig(): JwtModuleOptions{
    return {
        secret: process.env.ACCESS_TOKEN_SECRET,
        signOptions: {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
        },
    }
}