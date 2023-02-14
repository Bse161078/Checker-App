import { ApiProperty } from "@nestjs/swagger";
import {IsBoolean, IsBooleanString, IsNotEmpty, IsObject, IsOptional, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";

export class RoomIdDto {
    @ApiProperty()
    roomID: string;
}


class Mistake{
    @IsNotEmpty()
    @IsBoolean()
    status


    @IsOptional()
    @IsString()
    text;
}

export class PostMistakesDto {

    @IsString()
    @IsOptional()
    roomId


    @IsOptional()
    @IsBooleanString()
    roomIsNotVacuumedStatus;



    @IsOptional()
    @IsBooleanString()
    roomHasStrongStainsThatCanNotBeCleanedByUsStatus;



    @IsOptional()
    @IsBooleanString()
    damageCausedByGuestsStatus;



    @IsOptional()
    @IsBooleanString()
    reportStatus;




}