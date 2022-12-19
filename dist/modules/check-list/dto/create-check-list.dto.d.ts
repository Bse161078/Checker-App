import { IMaterialList } from "../entities/check-list.entity";
import { Types } from "mongoose";
import { CheckListSupplier } from "../enum/check-list-supplier.enum";
export declare class CreateCheckListDto {
    materials: IMaterialList[];
    supplier: CheckListSupplier;
    hotel: Types.ObjectId;
    company: Types.ObjectId;
    checker: Types.ObjectId;
}
