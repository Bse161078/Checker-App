import { Types } from "mongoose";
import { RoomType } from "../enum/room-type.enum";
export declare class CreateRoomDto {
    type: RoomType;
    name: string;
    level: Types.ObjectId;
}
