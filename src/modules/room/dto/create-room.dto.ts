import {Optional} from "@nestjs/common";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {IsEnum, IsNotEmpty, IsOptional, IsString, Length} from "class-validator";
import {Types} from "mongoose";
import {RoomOccupationStatus, RoomType} from "../enum/room-type.enum";

export class CreateRoomDto {

    @ApiProperty({type: "string"})
    @IsString()
    roomType: string;


    @ApiProperty()
    @Length(3)
    @IsString()
    name: string;


    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    name_de: string;


    @ApiProperty({type: "string"})
    @IsNotEmpty()
    @IsString()
    level: Types.ObjectId;

    @ApiProperty({type: "string"})
    @IsOptional()
    @IsString()
    hotel: Types.ObjectId;
}
