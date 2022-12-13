import { Types } from "mongoose";
import { ROLES } from "src/common/enums/role.enum";
export declare class CreateCheckerDto {
    fullname: string;
    avatar: string;
    username: string;
    password: string;
    hotelID: string;
    role: ROLES;
    company?: Types.ObjectId;
    hotel?: Types.ObjectId;
}
