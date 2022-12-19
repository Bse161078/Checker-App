import { ROLES } from "src/common/enums/role.enum";
export declare class CreateCompanyDto {
    fullName: string;
    company_name: string;
    username: string;
    password: string;
    email: string;
    role: ROLES;
}
