import { RoomTypeService } from './room-type.service';
import { CreateRoomTypeDto } from './dto/create-room-type.dto';
import { UpdateRoomTypeDto } from './dto/update-room-type.dto';
export declare class RoomTypeController {
    private readonly roomTypeService;
    constructor(roomTypeService: RoomTypeService);
    create(createRoomTypeDto: CreateRoomTypeDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<{
        roomTypes: Omit<import("mongoose").Document<unknown, any, import("./entities/room-type.entity").RoomTypeDocument> & import("./entities/room-type.entity").RoomType & Document & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
    }>;
    findOne(id: string): Promise<{
        roomType: import("mongoose").Document<unknown, any, import("./entities/room-type.entity").RoomTypeDocument> & import("./entities/room-type.entity").RoomType & Document & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    update(id: string, updateRoomTypeDto: UpdateRoomTypeDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
