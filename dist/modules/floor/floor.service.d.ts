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
import { CreateFloorDto } from './dto/create-floor.dto';
import { Floor, FloorDocument } from './entities/floor.entity';
import { IFloorFilesUpload } from './interfaces/files.interface';
export declare class FloorService {
    private request;
    private floorRepository;
    constructor(request: Request, floorRepository: Model<FloorDocument>);
    create(createFloorDto: CreateFloorDto & any, files: IFloorFilesUpload): Promise<boolean>;
    getFloorStatus(room: Types.ObjectId): Promise<Floor & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    findOneFloor(room: Types.ObjectId): Promise<Floor & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
}
