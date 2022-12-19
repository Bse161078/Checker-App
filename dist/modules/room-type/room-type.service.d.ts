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
import { CreateRoomTypeDto } from './dto/create-room-type.dto';
import { UpdateRoomTypeDto } from './dto/update-room-type.dto';
import { RoomType, RoomTypeDocument } from './entities/room-type.entity';
import { Model, Types } from 'mongoose';
import { Request } from 'express';
import { RoomDocument } from '../room/entities/room.entity';
export declare class RoomTypeService {
    private roomtypeRepository;
    private roomRepository;
    private request;
    constructor(roomtypeRepository: Model<RoomTypeDocument>, roomRepository: Model<RoomDocument>, request: Request);
    create(createRoomTypeDto: CreateRoomTypeDto): Promise<import("mongoose").Document<unknown, any, RoomTypeDocument> & RoomType & Document & {
        _id: Types.ObjectId;
    }>;
    findAll(): Promise<Omit<import("mongoose").Document<unknown, any, RoomTypeDocument> & RoomType & Document & {
        _id: Types.ObjectId;
    }, never>[]>;
    findOne(_id: string): Promise<import("mongoose").Document<unknown, any, RoomTypeDocument> & RoomType & Document & {
        _id: Types.ObjectId;
    }>;
    update(id: string, updateRoomTypeDto: UpdateRoomTypeDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<boolean>;
}
