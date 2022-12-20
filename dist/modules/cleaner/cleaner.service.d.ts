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
import { AuthService } from '../auth/services/auth.service';
import { CleaningHistory, CleaningHistoryDocument } from '../room/entities/cleaning-history.entity';
import { User, UserDocument } from '../user/entities/user.entity';
import { CreateCleanerDto } from './dto/create-cleaner.dto';
import { UpdateCleanerDto } from './dto/update-cleaner.dto';
import { RoomDocument } from '../room/entities/room.entity';
import { BillDocument } from '../bills/entities/bill.entity';
export declare class CleanerService {
    private userRepository;
    private cleaningHistoryRepository;
    private billRepository;
    private roomRepository;
    private request;
    private authService;
    constructor(userRepository: Model<UserDocument>, cleaningHistoryRepository: Model<CleaningHistoryDocument>, billRepository: Model<BillDocument>, roomRepository: Model<RoomDocument>, request: Request, authService: AuthService);
    create(createCleanerDto: CreateCleanerDto): Promise<import("mongoose").Document<unknown, any, UserDocument> & User & Document & Required<{
        _id: Types.ObjectId;
    }>>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, UserDocument> & User & Document & Required<{
        _id: Types.ObjectId;
    }>)[]>;
    findOne(id: string): Promise<any>;
    update(id: string, updateCleanerDto: UpdateCleanerDto): Promise<boolean>;
    remove(id: string): Promise<boolean>;
    startCleaningRoom(roomID: string): Promise<import("mongoose").Document<unknown, any, CleaningHistoryDocument> & CleaningHistory & Document & {
        _id: Types.ObjectId;
    }>;
    endCleaningRoom(roomID: string): Promise<{
        updatedResult: import("mongodb").UpdateResult;
        cleaningEndAt: string;
    }>;
    getCompanyCleaners(companyID: string): Promise<(import("mongoose").Document<unknown, any, UserDocument> & User & Document & Required<{
        _id: Types.ObjectId;
    }>)[]>;
    getCompanyCleanerById(cleanerId: string): Promise<import("mongoose").Document<unknown, any, UserDocument> & User & Document & Required<{
        _id: Types.ObjectId;
    }>>;
    getHotelCleaners(hotelID: string): Promise<(import("mongoose").Document<unknown, any, UserDocument> & User & Document & Required<{
        _id: Types.ObjectId;
    }>)[]>;
    getHotelCleanerById(cleanerId: string): Promise<import("mongoose").Document<unknown, any, UserDocument> & User & Document & Required<{
        _id: Types.ObjectId;
    }>>;
}
