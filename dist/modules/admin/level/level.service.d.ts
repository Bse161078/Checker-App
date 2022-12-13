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
import { Model } from 'mongoose';
import { RoomDocument } from '../room/entities/room.entity';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { Level, LevelDocument } from './entities/level.entity';
export declare class LevelService {
    private readonly adminLevelRepository;
    private readonly adminRoomRepository;
    constructor(adminLevelRepository: Model<LevelDocument>, adminRoomRepository: Model<RoomDocument>);
    create(createLevelDto: CreateLevelDto): Promise<import("mongoose").Document<unknown, any, LevelDocument> & Level & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, any, LevelDocument> & Level & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateLevelDto: UpdateLevelDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<boolean>;
}
