/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document, Types } from "mongoose";
import { CheckListSupplier } from "../enum/check-list-supplier.enum";
export declare class MaterialList extends Document {
    material: Types.ObjectId;
    quantity: number;
}
export interface IMaterialList {
    material: Types.ObjectId;
    quantity: number;
}
export declare class CheckList {
    materials: IMaterialList[];
    supplierIsCompany: CheckListSupplier;
    company: Types.ObjectId;
    hotel: Types.ObjectId;
    checker: Types.ObjectId;
}
export type CheckListDocument = Document & CheckList;
export declare const CheckListSchema: import("mongoose").Schema<CheckList, import("mongoose").Model<CheckList, any, any, any, any>, {}, {}, {}, {}, "type", CheckList>;
