import { ROLES } from "../enums/role.enum";
export declare function AuthDecorator(...permissions: ROLES[]): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
