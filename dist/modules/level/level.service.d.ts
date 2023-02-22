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
import { FilterQuery, Model, Types } from 'mongoose';
import { RoomDocument } from '../room/entities/room.entity';
import { UserDocument } from '../user/entities/user.entity';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { Level, LevelDocument } from './entities/level.entity';
export declare class LevelService {
    private readonly adminLevelRepository;
    private readonly adminRoomRepository;
    private readonly userRepository;
    private request;
    constructor(adminLevelRepository: Model<LevelDocument>, adminRoomRepository: Model<RoomDocument>, userRepository: Model<UserDocument>, request: any);
    create(createLevelDto: CreateLevelDto, userID: Types.ObjectId): Promise<import("mongoose").Document<unknown, any, LevelDocument> & Level & Document & {
        _id: Types.ObjectId;
    }>;
    findAll(filter?: FilterQuery<UserDocument>): Promise<any[]>;
    findOne(id: string): Promise<any>;
    update(id: string, updateLevelDto: UpdateLevelDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<boolean>;
}
