import { Types } from "mongoose";
import { ROLES } from "src/common/enums/role.enum";
export declare class CreateCleanerDto {
    fullname: string;
    avatar?: string;
    username: string;
    password: string;
    salaryPerRoom: number;
    roomCountForCleanEachDay: number;
    hotelID: string;
    role: ROLES;
    company?: Types.ObjectId;
    hotel?: Types.ObjectId;
}
