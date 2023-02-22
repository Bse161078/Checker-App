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
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room, RoomDocument } from './entities/room.entity';
import { SearchRoom, SendAlertDto, SetRoomStatus, StartCleaningDto, UpdateCleaningStatus } from './dto/send-alert.dto';
import { CleaningHistoryDocument } from './entities/cleaning-history.entity';
import { RoomTypeDocument } from "../room-type/entities/room-type.entity";
import { MistakesFileUpload } from "./interfaces/files.interface";
import { PostMistakesDto } from "./dto/room.dto";
export declare class AdminRoomService {
    private readonly adminRoomRepository;
    private readonly cleaningHistoryRepository;
    private roomtypeRepository;
    private request;
    constructor(adminRoomRepository: Model<RoomDocument>, cleaningHistoryRepository: Model<CleaningHistoryDocument>, roomtypeRepository: Model<RoomTypeDocument>, request: any);
    create(createRoomDto: CreateRoomDto): Promise<import("mongoose").Document<unknown, any, RoomDocument> & Room & Document & {
        _id: Types.ObjectId;
    }>;
    findAll(filter?: FilterQuery<RoomDocument>): Promise<any[]>;
    findOne(id: string): Promise<any>;
    update(id: string, updateRoomDto: UpdateRoomDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
    sendAlert(sendAlertDto: SendAlertDto): Promise<{
        message: string;
    }>;
    startRoomCleaning(startCleaning: StartCleaningDto): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, any, CleaningHistoryDocument> & import("./entities/cleaning-history.entity").CleaningHistory & Document & {
            _id: Types.ObjectId;
        };
    }>;
    updateCleaningStatus(updateCleaningStatus: UpdateCleaningStatus): Promise<(import("mongoose").Document<unknown, any, CleaningHistoryDocument> & import("./entities/cleaning-history.entity").CleaningHistory & Document & {
        _id: Types.ObjectId;
    }) | {
        message: string;
    }>;
    setRoomStatus(setRoomStatusDto: SetRoomStatus): Promise<{
        message: string;
    }>;
    search(search: SearchRoom): Promise<(import("mongoose").Document<unknown, any, RoomDocument> & Room & Document & {
        _id: Types.ObjectId;
    })[]>;
    setMistakes(mistakeDto: PostMistakesDto & any, files: MistakesFileUpload): Promise<import("mongodb").UpdateResult>;
    createRoomReport(): Promise<{
        cleanersUsed: number;
        roomsCleaned: number;
        roomsInProgress: number;
        roomsNotCleaned: number;
        roomsDamaged: number;
        notDamaged: number;
        cleanersReport: any;
        roomsReport: any;
    }>;
}
