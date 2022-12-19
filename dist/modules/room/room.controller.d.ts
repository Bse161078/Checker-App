import { AdminRoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
export declare class AdminRoomController {
    private readonly roomService;
    constructor(roomService: AdminRoomService);
    create(createRoomDto: CreateRoomDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<{
        rooms: any[];
    }>;
    findOne(id: string): Promise<{
        room: any;
    }>;
    update(id: string, updateRoomDto: UpdateRoomDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
    getCleanerBills(): Promise<void>;
}
