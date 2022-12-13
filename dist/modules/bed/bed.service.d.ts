import { Request } from 'express';
import { Model, Types } from 'mongoose';
import { CreateBedDto } from './dto/create-bed.dto';
import { Bed, BedDocument } from './entities/bed.entity';
import { IBedFilesUpload } from './interfaces/files.interface';
export declare class BedService {
    private request;
    private bedRepository;
    constructor(request: Request, bedRepository: Model<BedDocument>);
    create(createBedDto: CreateBedDto | any, files: IBedFilesUpload): Promise<boolean>;
    getBedStatus(room: Types.ObjectId): Promise<Bed & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    findOneBed(room: Types.ObjectId): Promise<Bed & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
}
