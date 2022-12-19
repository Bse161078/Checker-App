/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateBillDto } from './dto/create-bill.dto';
import { Request } from 'express';
import { Bill, BillDocument } from './entities/bill.entity';
import { Model } from 'mongoose';
import { CleaningHistoryDocument } from '../room/entities/cleaning-history.entity';
import { UserDocument } from '../user/entities/user.entity';
export declare class BillsService {
    private request;
    private billRepository;
    private cleaningHistoryRepository;
    private userRepository;
    constructor(request: Request, billRepository: Model<BillDocument>, cleaningHistoryRepository: Model<CleaningHistoryDocument>, userRepository: Model<UserDocument>);
    create(createBillDto: CreateBillDto): Promise<boolean>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, BillDocument> & Bill & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, any, BillDocument> & Bill & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getCleanerBill(cleanerID: string): Promise<import("mongoose").Document<unknown, any, BillDocument> & Bill & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
