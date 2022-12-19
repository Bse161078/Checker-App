import { ApiProperty } from "@nestjs/swagger";
import { ROLES } from "src/common/enums/role.enum";

export class CreateCompanyDto {
    @ApiProperty()
    fullName: string;
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    email: string;
    role: ROLES
}
