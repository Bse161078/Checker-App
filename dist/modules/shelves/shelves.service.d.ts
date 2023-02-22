import { Model, Types } from 'mongoose';
import { CreateShelvesDto } from './dto/create-shelf.dto';
import { Shelves, ShelvesDocument } from './entities/shelves.entity';
import { IShelvesFilesUpload } from './interfaces/files.interface';
export declare class ShelvesService {
    private request;
    private shelvesRepository;
    constructor(request: any, shelvesRepository: Model<ShelvesDocument>);
    create(createShelvesDto: CreateShelvesDto | any, files: IShelvesFilesUpload): Promise<boolean>;
    getShelvesStatus(room: Types.ObjectId): Promise<Shelves & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    findOneShelves(room: Types.ObjectId): Promise<Shelves & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
}
