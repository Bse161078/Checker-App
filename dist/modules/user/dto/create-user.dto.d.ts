import { Types } from "mongoose";
import { ADMIN_ROLES } from "src/common/enums/role.enum";
export declare class CreateUserDto {
    fullname: string;
    username: string;
    password: string;
    email: string;
    role: ADMIN_ROLES;
    mobile: string;
    hotel: Types.ObjectId;
    price: any;
}
