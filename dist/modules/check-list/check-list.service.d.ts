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
import { CreateCheckListDto } from './dto/create-check-list.dto';
import { CheckList, CheckListDocument } from './entities/check-list.entity';
import { Model, Types } from 'mongoose';
import { Request } from 'express';
import { UserDocument } from '../user/entities/user.entity';
export declare class CheckListService {
    private checkListRepository;
    private userRepository;
    private request;
    constructor(checkListRepository: Model<CheckListDocument>, userRepository: Model<UserDocument>, request: Request);
    create(createCheckListDto: CreateCheckListDto): Promise<boolean>;
    findAll(): Promise<(import("mongoose").Document<any, any, any> & CheckList & {
        _id: Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<any, any, any> & CheckList & {
        _id: Types.ObjectId;
    }>;
    remove(id: string): Promise<boolean>;
}
