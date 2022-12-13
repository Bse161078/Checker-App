import { Types } from 'mongoose';
import { RoomIdDto } from '../room/dto/room.dto';
import { CurtainsService } from './curtains.service';
import { CreateCurtainDto } from './dto/create-curtain.dto';
import { ICurtainFilesUpload } from './interfaces/files.interface';
export declare class CurtainsController {
    private readonly curtainsService;
    constructor(curtainsService: CurtainsService);
    create(files: ICurtainFilesUpload, createCurtainDto: CreateCurtainDto, param: RoomIdDto): Promise<void>;
    getBathRoomDetail(param: RoomIdDto): Promise<{
        curtain: import("./entities/curtains.entity").Curtain & import("mongoose").Document<any, any, any> & {
            _id: Types.ObjectId;
        };
    }>;
}
