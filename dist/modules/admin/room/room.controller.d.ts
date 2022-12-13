import { HttpStatus } from '@nestjs/common';
import { AdminRoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
export declare class AdminRoomController {
    private readonly roomService;
    constructor(roomService: AdminRoomService);
    create(createRoomDto: CreateRoomDto): Promise<{
        statusCode: HttpStatus;
        data: {
            message: string;
        };
    }>;
    findAll(): Promise<{
        statusCode: HttpStatus;
        data: {
            rooms: (import("mongoose").Document<unknown, any, import("./entities/room.entity").RoomDocument> & import("./entities/room.entity").Room & Document & {
                _id: import("mongoose").Types.ObjectId;
            })[];
        };
    }>;
    findOne(id: string): Promise<{
        statusCode: HttpStatus;
        data: {
            room: import("mongoose").Document<unknown, any, import("./entities/room.entity").RoomDocument> & import("./entities/room.entity").Room & Document & {
                _id: import("mongoose").Types.ObjectId;
            };
        };
    }>;
    update(id: string, updateRoomDto: UpdateRoomDto): Promise<{
        statusCode: HttpStatus;
        data: {
            message: string;
        };
    }>;
    remove(id: string): Promise<{
        statusCode: HttpStatus;
        data: {
            message: string;
        };
    }>;
}
