import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

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
    @IsNumber()
    quantity: string;

}