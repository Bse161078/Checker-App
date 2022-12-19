import { Optional } from "@nestjs/common";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Length } from "class-validator";
import { Types } from "mongoose";

export class CreateRoomDto {
    @ApiProperty({type: "string"})
    roomType: Types.ObjectId;
    @ApiProperty()
    @Length(3)
    name: string;
    @ApiPropertyOptional()
    @Optional()
    name_de: string;
    @ApiProperty({type: "string"})
    level: Types.ObjectId;
    hotel: Types.ObjectId
}
