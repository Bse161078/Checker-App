import { CreateCheckListDto } from './dto/create-check-list.dto';
import { CheckList, CheckListDocument } from './entities/check-list.entity';
import { Model, Types } from 'mongoose';
import { Request } from 'express';
import { UserDocument } from '../user/entities/user.entity';
export declare class CheckListService {
    private checkListRepository;
    private userRepository;
    private request;
    constructor(checkListRepository: Model<CheckListDocument>, userRepository: Model<UserDocument>, request: Request);
    create(createCheckListDto: CreateCheckListDto): Promise<boolean>;
    findAll(): Promise<(import("mongoose").Document<any, any, any> & CheckList & {
        _id: Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<any, any, any> & CheckList & {
        _id: Types.ObjectId;
    }>;
    remove(id: string): Promise<boolean>;
}
