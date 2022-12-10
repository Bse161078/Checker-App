import { Global, Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "../user/entities/user.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./services/auth.service";
import { JwtStrategy } from "./strategy/jwt.strategy";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema }
        ])
        
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtService, JwtStrategy],
    exports: [AuthService]
})
@Global()
export class AuthModule { }