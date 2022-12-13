import { Types } from "mongoose";
export declare class CreateCleanerDto {
    fullname: string;
    avatar: string;
    startAt: string;
    endAt: string;
    username: string;
    password: string;
    salaryPerRoom: number;
    roomCountForCleanEachDay: number;
    hotelID: string;
    company?: Types.ObjectId;
    hotel?: Types.ObjectId;
}
