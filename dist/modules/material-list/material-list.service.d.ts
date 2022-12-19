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
import { CreateMaterialListDto } from './dto/create-material-list.dto';
import { UpdateMaterialListDto } from './dto/update-material-list.dto';
import { Material, MaterialDocument } from './entities/material-list.entity';
import { Model, Types } from 'mongoose';
import { UserDocument } from '../user/entities/user.entity';
import { Request } from 'express';
export declare class MaterialListService {
    private materialRepository;
    private userRepository;
    private request;
    constructor(materialRepository: Model<MaterialDocument>, userRepository: Model<UserDocument>, request: Request);
    create(createMaterialListDto: CreateMaterialListDto): Promise<import("mongoose").Document<unknown, any, MaterialDocument> & Material & Document & {
        _id: Types.ObjectId;
    }>;
    findAll(): Promise<Omit<Omit<import("mongoose").Document<unknown, any, MaterialDocument> & Material & Document & {
        _id: Types.ObjectId;
    }, never>, never>[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, any, MaterialDocument> & Material & Document & {
        _id: Types.ObjectId;
    }>;
    update(id: string, updateMaterialListDto: UpdateMaterialListDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
