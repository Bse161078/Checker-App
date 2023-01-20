import { FloorService } from './floor.service';
import { CreateFloorDto } from './dto/create-floor.dto';
import { IFloorFilesUpload } from './interfaces/files.interface';
import { RoomIdDto } from '../room/dto/room.dto';
import { Types } from 'mongoose';
export declare class FloorController {
    private readonly floorService;
    constructor(floorService: FloorService);
    saveFloorData(files: IFloorFilesUpload, createFloorDto: CreateFloorDto, param: RoomIdDto): Promise<{
        message: string;
    }>;
    getFloorDetail(param: RoomIdDto): Promise<{
        floor: import("./entities/floor.entity").Floor & import("mongoose").Document<any, any, any> & {
            _id: Types.ObjectId;
        };
    }>;
}
