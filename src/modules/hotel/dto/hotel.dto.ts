import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Length } from "class-validator";
import { Types } from "mongoose";
import { ROLES } from "src/common/enums/role.enum";

export class HotelDto {
    @ApiProperty()
    hotelID: string
}
export class CreateHotelCleanerDto {
    @ApiProperty({type: "string"})
    @Length(3)
    fullname: string;
    @ApiPropertyOptional({type: "string", format: "binary", })
    avatar: string;
    @ApiProperty()
    @Length(3)
    username: string;
    @ApiProperty()
    @Length(6, 16)
    password: string;
    @ApiProperty({type: "integer"})
    salaryPerRoom: number;
    @ApiProperty({type: "integer"})
    roomCountForCleanEachDay: number;
    @ApiProperty({type: "string"})
    hotel: Types.ObjectId;
    role: ROLES = ROLES.CLEANER;
}
export class CreateHotelCheckerDto {

    @ApiProperty({type: "string"})
    @Length(3)
    fullname: string;
    @ApiPropertyOptional({type: "string", format: "binary", })
    avatar: string;
    @ApiProperty()
    @Length(3)
    username: string;
    @ApiProperty()
    @Length(6, 16)
    password: string;
    @ApiProperty({type: "string"})
    hotel: Types.ObjectId;
    role: ROLES = ROLES.CHECKER;
}
export class CreateHotelReceptionDto {
    @ApiProperty({type: "string"})
    @Length(3)
    fullname: string;
    @ApiProperty()
    @Length(3)
    username: string;
    @ApiProperty()
    @Length(6, 16)
    password: string;
    @ApiProperty({type: "string"})
    hotel: Types.ObjectId;
    role: ROLES = ROLES.HOTELRECEPTION;
}