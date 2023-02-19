import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Types } from "mongoose";
import { ADMIN_ROLES, ROLES } from "src/common/enums/role.enum";
import {IsNotEmpty, IsNumber, IsObject, IsOptional, ValidateNested} from "class-validator";
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


export class CreateUserDto {
    @ApiPropertyOptional()
    fullname: string;
    @ApiProperty({default: "hotem-username"})
    username: string;
    @ApiProperty({format: "password", default: "123456"})
    password: string;
    @ApiPropertyOptional()
    email: string;
    @ApiProperty({type: "string", format: "enum", enum: ADMIN_ROLES})
    role: ADMIN_ROLES;
    @ApiPropertyOptional()
    mobile: string;
    hotel: Types.ObjectId;

    @IsOptional()
    @IsObject()
    @ValidateNested({each: true})
    @Type(() => PriceDto)
    price;

}
