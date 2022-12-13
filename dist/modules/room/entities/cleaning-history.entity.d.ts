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
import { Types } from "mongoose";
import { ROOM_STATUS } from "src/common/enums/room-status.enum";
export declare class CleaningHistory {
    cleaner: Types.ObjectId;
    cleaningStartAt: string;
    cleaningEndAt: string;
    room: Types.ObjectId;
    checker: Types.ObjectId;
    status: ROOM_STATUS;
}
export type CleaningHistoryDocument = CleaningHistory & Document;
export declare const CleaningHistorySchema: import("mongoose").Schema<CleaningHistory, import("mongoose").Model<CleaningHistory, any, any, any, any>, {}, {}, {}, {}, "type", CleaningHistory>;
