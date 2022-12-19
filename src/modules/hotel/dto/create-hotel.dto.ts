import { ApiProperty } from "@nestjs/swagger";
import { Types } from "mongoose";
import { ROLES } from "src/common/enums/role.enum";

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
    role: ROLES
}
export class AddCompanyToHotel {
    @ApiProperty({type: 'string'})
    company: Types.ObjectId;
}

