import { Types } from "mongoose";
import { ROLES } from "src/common/enums/role.enum";
import { CreateHotelCheckerDto, CreateHotelCleanerDto } from "src/modules/hotel/dto/hotel.dto";
export declare class CompanyDto {
    companyID: string;
}
export declare class CreateCompanyCleanerDto extends CreateHotelCleanerDto {
    company: Types.ObjectId;
}
export declare class CreateCompanyCheckerDto extends CreateHotelCheckerDto {
    company: Types.ObjectId;
    role: ROLES;
}
