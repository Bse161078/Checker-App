import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Types } from "mongoose";
import { ADMIN_ROLES, ROLES } from "src/common/enums/role.enum";

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
    hotel: Types.ObjectId
}
