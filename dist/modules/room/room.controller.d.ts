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
import { AdminRoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { SearchRoom, SendAlertDto, SetRoomStatus, StartCleaningDto, UpdateCleaningStatus } from './dto/send-alert.dto';
import { PostMistakesDto } from "./dto/room.dto";
import { Types } from "mongoose";
import { MistakesFileUpload } from "./interfaces/files.interface";
export declare class AdminRoomController {
    private readonly roomService;
    constructor(roomService: AdminRoomService);
    create(createRoomDto: CreateRoomDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<{
        rooms: any[];
    }>;
    update(id: string, updateRoomDto: UpdateRoomDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
    sendAlert(sendAlertDto: SendAlertDto): Promise<void>;
    startCleaning(startCleaning: StartCleaningDto): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, any, import("./entities/cleaning-history.entity").CleaningHistoryDocument> & import("./entities/cleaning-history.entity").CleaningHistory & Document & {
            _id: Types.ObjectId;
        };
    }>;
    updateCleaningStatus(updateCleaningStatus: UpdateCleaningStatus): Promise<(import("mongoose").Document<unknown, any, import("./entities/cleaning-history.entity").CleaningHistoryDocument> & import("./entities/cleaning-history.entity").CleaningHistory & Document & {
        _id: Types.ObjectId;
    }) | {
        message: string;
    }>;
    setRoomStatus(setRoomStatusDto: SetRoomStatus): Promise<void>;
    searchRooms(search: SearchRoom): Promise<(import("mongoose").Document<unknown, any, import("./entities/room.entity").RoomDocument> & import("./entities/room.entity").Room & Document & {
        _id: Types.ObjectId;
    })[]>;
    createReport(): Promise<{
        cleanersUsed: number;
        roomsCleaned: number;
        roomsInProgress: number;
        roomsNotCleaned: number;
        roomsDamaged: number;
        notDamaged: number;
        cleanersReport: any;
        roomsReport: any;
    }>;
    findOne(id: string): Promise<{
        room: any;
    }>;
    saveMistakes(id: string, files: MistakesFileUpload, createRoomMistake: PostMistakesDto): Promise<{
        message: string;
    }>;
}
