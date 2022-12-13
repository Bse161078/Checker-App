import { Request } from 'express';
import { Model } from 'mongoose';
import { CreateBathroomDto } from './dto/create-bathroom.dto';
import { BathRoomDocument } from './entities/bathroom.entity';
import { IBathRoomFilesUpload } from './interfaces/files.interface';
export declare class BathroomService {
    private request;
    private bathroomRepository;
    constructor(request: Request, bathroomRepository: Model<BathRoomDocument>);
    create(createBathroomDto: CreateBathroomDto | any, files: IBathRoomFilesUpload): Promise<boolean>;
    getBathRoomStatus(): Promise<any>;
    findOneByCheckerAndHotel(): Promise<any>;
}
