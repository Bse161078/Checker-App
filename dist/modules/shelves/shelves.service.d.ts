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
import { CreateShelvesDto } from './dto/create-shelf.dto';
import { Shelves, ShelvesDocument } from './entities/shelves.entity';
import { IShelvesFilesUpload } from './interfaces/files.interface';
export declare class ShelvesService {
    private request;
    private shelvesRepository;
    constructor(request: Request, shelvesRepository: Model<ShelvesDocument>);
    create(createShelvesDto: CreateShelvesDto | any, files: IShelvesFilesUpload): Promise<boolean>;
    getShelvesStatus(room: Types.ObjectId): Promise<Shelves & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    findOneShelves(room: Types.ObjectId): Promise<Shelves & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
}
