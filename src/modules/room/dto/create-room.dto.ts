import { ApiProperty } from "@nestjs/swagger";
import { Length } from "class-validator";
import { Types } from "mongoose";
import { RoomType } from "../enum/room-type.enum";

export class CreateRoomDto {
    @ApiProperty({type: "string", format: "enum", enum: RoomType})
    type: RoomType;
    @ApiProperty()
    @Length(3)
    name: string;
    @ApiProperty({type: "string"})
    level: Types.ObjectId;
}
