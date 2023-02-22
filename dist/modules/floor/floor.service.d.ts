import { Model, Types } from 'mongoose';
import { CreateFloorDto } from './dto/create-floor.dto';
import { Floor, FloorDocument } from './entities/floor.entity';
import { IFloorFilesUpload } from './interfaces/files.interface';
export declare class FloorService {
    private request;
    private floorRepository;
    constructor(request: any, floorRepository: Model<FloorDocument>);
    create(createFloorDto: CreateFloorDto & any, files: IFloorFilesUpload): Promise<boolean>;
    getFloorStatus(room: Types.ObjectId): Promise<Floor & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    findOneFloor(room: Types.ObjectId): Promise<Floor & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
}
