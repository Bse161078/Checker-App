import { Types } from "mongoose";
import { ROLES } from "src/common/enums/role.enum";
export declare class HotelDto {
    hotelID: string;
}
export declare class CreateHotelCleanerDto {
    fullname: string;
    avatar: string;
    startAt: string;
    endAt: string;
    username: string;
    password: string;
    salaryPerRoom: number;
    roomCountForCleanEachDay: number;
    hotel?: Types.ObjectId;
    role: ROLES;
}
