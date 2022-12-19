import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Length } from "class-validator";
import { Types } from "mongoose";
import { ROLES } from "src/common/enums/role.enum";

export class CreateCleanerDto {
    @ApiProperty({type: "string"})
    @Length(3)
    fullname: string;
    @ApiProperty({type: "string", format: "binary", required: false})
    avatar?: string;
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
    @ApiPropertyOptional({type: "string"})
    hotelID: string;
    role: ROLES = ROLES.CLEANER;
    company?: Types.ObjectId;
    hotel?: Types.ObjectId;
}
