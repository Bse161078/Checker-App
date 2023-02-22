import { Types } from "mongoose";
import { CheckListSupplier } from "../enum/check-list-supplier.enum";
export declare class CreateCheckListDto {
    materials: any;
    supplier: CheckListSupplier;
    hotel: Types.ObjectId;
    company: Types.ObjectId;
    checker: Types.ObjectId;
}
