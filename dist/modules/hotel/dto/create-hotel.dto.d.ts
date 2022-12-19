import { ROLES } from "src/common/enums/role.enum";
export declare class CreateHotelDto {
    fullName: string;
    username: string;
    password: string;
    email: string;
    role: ROLES;
}
