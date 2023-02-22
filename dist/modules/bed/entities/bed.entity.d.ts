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
interface IBedComments {
    isMadeUp: ICommentValue;
    bedDoesNotLookFresh: ICommentValue;
    bedSheetInNotProperlyTightened: ICommentValue;
    extraBed: ICommentValue;
}
export declare class Bed {
    title: string;
    topQuestion: ITopQuestion;
    comments: IBedComments;
    damage: IDamageReport;
    cleaner: Types.ObjectId;
    checker: Types.ObjectId;
    room: Types.ObjectId;
    hotel: Types.ObjectId;
}
export type BedDocument = Bed & Document;
export declare const BedSchema: import("mongoose").Schema<Bed, import("mongoose").Model<Bed, any, any, any, any>, {}, {}, {}, {}, "type", Bed>;
export {};
