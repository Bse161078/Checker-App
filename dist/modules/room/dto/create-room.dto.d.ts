import { Types } from "mongoose";
export declare class CreateRoomDto {
    roomType: Types.ObjectId;
    name: string;
    level: Types.ObjectId;
    hotel: Types.ObjectId;
}
