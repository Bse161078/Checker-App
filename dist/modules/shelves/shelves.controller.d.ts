import { ShelvesService } from './shelves.service';
import { CreateShelvesDto } from './dto/create-shelf.dto';
import { IShelvesFilesUpload } from './interfaces/files.interface';
import { RoomIdDto } from '../room/dto/room.dto';
import { Types } from 'mongoose';
export declare class ShelvesController {
    private readonly shelvesService;
    constructor(shelvesService: ShelvesService);
    create(files: IShelvesFilesUpload, createShelvesDto: CreateShelvesDto, param: RoomIdDto): Promise<{
        message: string;
    }>;
    getBathRoomDetail(param: RoomIdDto): Promise<{
        shelves: import("./entities/shelves.entity").Shelves & import("mongoose").Document<any, any, any> & {
            _id: Types.ObjectId;
        };
    }>;
}
