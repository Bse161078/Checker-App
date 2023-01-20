import { Types } from 'mongoose';
import { RoomIdDto } from '../room/dto/room.dto';
import { BathroomService } from './bathroom.service';
import { CreateBathroomDto } from './dto/create-bathroom.dto';
import { IBathRoomFilesUpload } from './interfaces/files.interface';
export declare class BathroomController {
    private readonly bathroomService;
    constructor(bathroomService: BathroomService);
    saveBathRoomData(files: IBathRoomFilesUpload, createBathroomDto: CreateBathroomDto, param: RoomIdDto): Promise<{
        message: string;
    }>;
    getBathRoomDetail(param: RoomIdDto): Promise<{
        bathroom: import("./entities/bathroom.entity").BathRoom & import("mongoose").Document<any, any, any> & {
            _id: Types.ObjectId;
        };
    }>;
}
