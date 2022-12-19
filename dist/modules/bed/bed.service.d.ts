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
import { CreateBedDto } from './dto/create-bed.dto';
import { Bed, BedDocument } from './entities/bed.entity';
import { IBedFilesUpload } from './interfaces/files.interface';
export declare class BedService {
    private request;
    private bedRepository;
    constructor(request: Request, bedRepository: Model<BedDocument>);
    create(createBedDto: CreateBedDto | any, files: IBedFilesUpload): Promise<boolean>;
    getBedStatus(room: Types.ObjectId): Promise<Bed & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    findOneBed(room: Types.ObjectId): Promise<Bed & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
}
