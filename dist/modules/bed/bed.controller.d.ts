import { Types } from 'mongoose';
import { RoomIdDto } from '../room/dto/room.dto';
import { BedService } from './bed.service';
import { CreateBedDto } from './dto/create-bed.dto';
import { IBedFilesUpload } from './interfaces/files.interface';
export declare class BedController {
    private readonly bedService;
    constructor(bedService: BedService);
    create(createBedDto: CreateBedDto, param: RoomIdDto, files: IBedFilesUpload): Promise<{
        message: string;
    }>;
    getBedDetail(param: RoomIdDto): Promise<{
        bed: import("./entities/bed.entity").Bed & import("mongoose").Document<any, any, any> & {
            _id: Types.ObjectId;
        };
    }>;
}
