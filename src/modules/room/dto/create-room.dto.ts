import {Optional} from "@nestjs/common";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Length} from "class-validator";
import {Types} from "mongoose";
import {RoomOccupationStatus, RoomType} from "../enum/room-type.enum";

export class CreateRoomDto {

    @ApiProperty({type: "string"})
    @IsOptional()
    @IsString()
    roomType: string;


    @ApiProperty()
    @IsString()
    name: string;


    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    name_de: string;


    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    price: Number;


    @ApiProperty({type: "string"})
    @IsNotEmpty()
    @IsString()
    level: Types.ObjectId;

    @ApiProperty({type: "string"})
    @IsString()
    hotel: Types.ObjectId;
}
