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
import { Request } from 'express';
import { Model, Types } from 'mongoose';
import { CreateBathroomDto } from './dto/create-bathroom.dto';
import { BathRoom, BathRoomDocument } from './entities/bathroom.entity';
import { IBathRoomFilesUpload } from './interfaces/files.interface';
export declare class BathroomService {
    private request;
    private bathroomRepository;
    constructor(request: Request, bathroomRepository: Model<BathRoomDocument>);
    create(createBathroomDto: CreateBathroomDto | any, files: IBathRoomFilesUpload): Promise<boolean>;
    getBathRoomStatus(room: Types.ObjectId): Promise<BathRoom & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    findOneBathRoom(room: Types.ObjectId): Promise<BathRoom & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
}
