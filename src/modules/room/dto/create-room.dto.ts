import {Optional} from "@nestjs/common";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {IsEnum, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, Length, ValidateNested} from "class-validator";
import {Types} from "mongoose";
import {RoomOccupationStatus, RoomType} from "../enum/room-type.enum";
import {Type} from "class-transformer";

class PriceDto {
    @IsNotEmpty()
    @IsNumber()
    normal;

    @IsNotEmpty()
    @IsNumber()
    extraChild;


    @IsNotEmpty()
    @IsNumber()
    extraAdult;

}


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



    @IsNotEmpty()
    @IsObject()
    @ValidateNested({each: true})
    @Type(() => PriceDto)
    price;


    @ApiProperty({type: "string"})
    @IsNotEmpty()
    @IsString()
    level: Types.ObjectId;

    @ApiProperty({type: "string"})
    @IsString()
    hotel: Types.ObjectId;
}
