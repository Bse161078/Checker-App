import { Types } from "mongoose";
export declare class CreateRoomDto {
    roomType: string;
    name: string;
    name_de: string;
    price: Number;
    level: Types.ObjectId;
    hotel: Types.ObjectId;
}
