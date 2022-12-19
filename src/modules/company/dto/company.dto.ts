import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Length } from "class-validator";
import { Types } from "mongoose";
import { ROLES } from "src/common/enums/role.enum";
import { CreateHotelCheckerDto, CreateHotelCleanerDto } from "src/modules/hotel/dto/hotel.dto";

export class CompanyDto {
    @ApiProperty()
    companyID: string
}

export class CreateCompanyCleanerDto extends CreateHotelCleanerDto {
    @ApiProperty({type: "string"})
    company: Types.ObjectId;
}
export class CreateCompanyCheckerDto extends  CreateHotelCheckerDto{
    @ApiProperty({type: "string"})
    company: Types.ObjectId;
    role: ROLES = ROLES.CHECKER;
}