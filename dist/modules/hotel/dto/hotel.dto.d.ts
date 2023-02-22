import { Types } from "mongoose";
import { ROLES } from "src/common/enums/role.enum";
export declare class HotelDto {
    hotelId: string;
}
export declare class CreateHotelCleanerDto {
    fullname: string;
    avatar: string;
    username: string;
    password: string;
    salaryPerRoom: number;
    roomCountForCleanEachDay: number;
    hotel: Types.ObjectId;
    role: ROLES;
}
export declare class CreateHotelCheckerDto {
    fullname: string;
    avatar: string;
    username: string;
    password: string;
    hotel: Types.ObjectId;
    role: ROLES;
}
export declare class CreateHotelReceptionDto {
    fullname: string;
    username: string;
    password: string;
    hotel: Types.ObjectId;
    role: ROLES;
}
export declare class UpdateHotelLogoDto {
    logo: string;
}
