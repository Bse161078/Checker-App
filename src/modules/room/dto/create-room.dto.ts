import { ApiProperty } from "@nestjs/swagger";
import { Length } from "class-validator";
import { Types } from "mongoose";
import { RoomType } from "../enum/room-type.enum";

export class CreateRoomDto {
    @ApiProperty()
    roomType: Types.ObjectId;
    @ApiProperty()
    @Length(3)
    name: string;
    @ApiProperty({type: "string"})
    level: Types.ObjectId;
    hotel: Types.ObjectId
}
