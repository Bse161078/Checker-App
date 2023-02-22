import {ApiProperty} from "@nestjs/swagger";
import {IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {OrderEmailDto} from "../enum/material.enum";

export class MaterialIdDto {
    @ApiProperty()
    materialID: string;
}


export class OrderMaterialDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    material: string;


    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(OrderEmailDto)
    emailTo: string;



    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    quantity: string;

}