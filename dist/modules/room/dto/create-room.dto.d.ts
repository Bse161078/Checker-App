import { Types } from "mongoose";
export declare class CreateRoomDto {
    roomType: Types.ObjectId;
    name: string;
    name_de: string;
    level: Types.ObjectId;
    hotel: Types.ObjectId;
}
