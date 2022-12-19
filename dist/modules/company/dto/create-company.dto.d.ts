import { ROLES } from "src/common/enums/role.enum";
export declare class CreateCompanyDto {
    fullName: string;
    username: string;
    password: string;
    email: string;
    role: ROLES;
}
