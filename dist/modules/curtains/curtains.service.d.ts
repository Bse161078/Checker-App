import { Model, Types } from 'mongoose';
import { CreateCurtainDto } from './dto/create-curtain.dto';
import { Curtain, CurtainDocument } from './entities/curtains.entity';
import { ICurtainFilesUpload } from './interfaces/files.interface';
export declare class CurtainsService {
    private request;
    private curtainRepository;
    constructor(request: any, curtainRepository: Model<CurtainDocument>);
    create(createCurtainDto: CreateCurtainDto & any, files: ICurtainFilesUpload): Promise<boolean>;
    getCurtainStatus(room: Types.ObjectId): Promise<Curtain & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    findOneCurtain(room: Types.ObjectId): Promise<Curtain & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
}
