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
import { ICommentValue, IDamageReport, ITopQuestion } from "../../check-list/interface/check-list.interface";
interface ICurtainComment {
    curtainsNotClean: ICommentValue;
    curtainsHaveWrinkles: ICommentValue;
}
export declare class Curtain {
    title: string;
    topQuestion: ITopQuestion;
    comments: ICurtainComment;
    damage: IDamageReport;
    cleaner: Types.ObjectId;
    room: Types.ObjectId;
    hotel: Types.ObjectId;
    checker: Types.ObjectId;
}
export type CurtainDocument = Curtain & Document;
export declare const CurtainSchema: import("mongoose").Schema<Curtain, import("mongoose").Model<Curtain, any, any, any, any>, {}, {}, {}, {}, "type", Curtain>;
export {};
