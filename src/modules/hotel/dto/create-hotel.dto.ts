import { Types } from "mongoose";
import { ROLES } from "src/common/enums/role.enum";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateHotelDto {
    @ApiProperty()
    fullName: string;
    @ApiProperty()
    hotel_name: string;
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    email: string;
    role: ROLES;
    @ApiPropertyOptional({type: "string", format: "binary", })
    avatar: string;

}
export class AddCompanyToHotel {
    @ApiProperty({type: 'string'})
    company: Types.ObjectId;
}

