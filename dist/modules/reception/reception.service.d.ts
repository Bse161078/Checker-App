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
import { CreateReceptionDto } from './dto/create-reception.dto';
import { Room, RoomDocument } from '../room/entities/room.entity';
import { Model } from 'mongoose';
import { Request } from 'express';
import { UserDocument } from '../user/entities/user.entity';
export declare class ReceptionService {
    private roomRepository;
    private cleanerRepository;
    private request;
    constructor(roomRepository: Model<RoomDocument>, cleanerRepository: Model<UserDocument>, request: Request);
    create(createReceptionDto: CreateReceptionDto): string;
    getRooms(): Promise<(import("mongoose").Document<unknown, any, RoomDocument> & Room & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getCleaners(id: number): Promise<void>;
}
