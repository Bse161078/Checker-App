import { Model } from "mongoose";
import { Strategy } from "passport-jwt";
import { ITokenPayload } from "src/common/interfaces/jwt.interface";
import { User, UserDocument } from "src/modules/user/entities/user.entity";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userRepository;
    constructor(userRepository: Model<UserDocument>);
    validate(payload: ITokenPayload): Promise<User | null>;
}
export {};
