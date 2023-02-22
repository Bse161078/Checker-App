import { Model, Types } from 'mongoose';
import { CreateBathroomDto } from './dto/create-bathroom.dto';
import { BathRoom, BathRoomDocument } from './entities/bathroom.entity';
import { IBathRoomFilesUpload } from './interfaces/files.interface';
export declare class BathroomService {
    private request;
    private bathroomRepository;
    constructor(request: any, bathroomRepository: Model<BathRoomDocument>);
    create(createBathroomDto: CreateBathroomDto | any, files: IBathRoomFilesUpload): Promise<boolean>;
    getBathRoomStatus(room: Types.ObjectId): Promise<BathRoom & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    findOneBathRoom(room: Types.ObjectId): Promise<BathRoom & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
}
