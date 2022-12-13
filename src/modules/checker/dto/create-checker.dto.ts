import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Length } from "class-validator";
import { Types } from "mongoose";
import { ROLES } from "src/common/enums/role.enum";

export class CreateCheckerDto {
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
    @ApiPropertyOptional({type: "string"})
    hotelID: string;
    
    role: ROLES = ROLES.CHECKER;
    company?: Types.ObjectId;
    hotel?: Types.ObjectId;
}
