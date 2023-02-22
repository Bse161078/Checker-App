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
interface IFloorComments {
    roomIsVacuumed: ICommentValue;
    roomIsNotVacuumed: ICommentValue;
    roomHasStrongStainsThatCanNotBeCleanedByUs: ICommentValue;
    DamageCausedByGuests: ICommentValue;
}
export declare class Floor {
    topQuestion: ITopQuestion;
    comments: IFloorComments;
    damage: IDamageReport;
    cleaner: Types.ObjectId;
    checker: Types.ObjectId;
    room: Types.ObjectId;
    hotel: Types.ObjectId;
}
export type FloorDocument = Floor & Document;
export declare const FloorSchema: import("mongoose").Schema<Floor, import("mongoose").Model<Floor, any, any, any, any>, {}, {}, {}, {}, "type", Floor>;
export {};
