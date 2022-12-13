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
import { IComments, IDamageReport, ITopQuestion } from "../interface/check-list.interface";
export declare class CheckList {
    title: string;
    topQuestion: ITopQuestion;
    comments: IComments[];
    damage: IDamageReport[];
    cleaner: Types.ObjectId;
    room: Types.ObjectId;
    hotel: Types.ObjectId;
}
export type CheckListDocument = Document & CheckList;
export declare const CheckListSchema: import("mongoose").Schema<CheckList, import("mongoose").Model<CheckList, any, any, any, any>, {}, {}, {}, {}, "type", CheckList>;
