import { Types } from "mongoose";
import { ROLES } from "src/common/enums/role.enum";
export declare class CreateHotelDto {
    fullName: string;
    hotel_name: string;
    username: string;
    password: string;
    email: string;
    role: ROLES;
}
export declare class AddCompanyToHotel {
    company: Types.ObjectId;
}
