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
import { Model, Types } from 'mongoose';
import { AuthService } from '../auth/services/auth.service';
import { User, UserDocument } from '../user/entities/user.entity';
import { CreateCheckerDto } from './dto/create-checker.dto';
import { UpdateCheckerDto } from './dto/update-checker.dto';
export declare class CheckerService {
    private userRepository;
    private request;
    private authService;
    constructor(userRepository: Model<UserDocument>, request: any, authService: AuthService);
    create(createCheckerDto: CreateCheckerDto): Promise<import("mongoose").Document<unknown, any, UserDocument> & User & Document & Required<{
        _id: Types.ObjectId;
    }>>;
    findAll(): Promise<Omit<import("mongoose").Document<unknown, any, UserDocument> & User & Document & Required<{
        _id: Types.ObjectId;
    }>, never>[]>;
    findOne(id: string): Promise<import("mongoose").LeanDocument<User & Document & Required<{
        _id: Types.ObjectId;
    }>>>;
    update(id: string, updateCheckerDto: UpdateCheckerDto): Promise<boolean>;
    remove(id: string): Promise<boolean>;
    getCompanyCheckers(companyID: string): Promise<(import("mongoose").Document<unknown, any, UserDocument> & User & Document & Required<{
        _id: Types.ObjectId;
    }>)[]>;
    getCompanyCheckerById(checkerId: string): Promise<import("mongoose").Document<unknown, any, UserDocument> & User & Document & Required<{
        _id: Types.ObjectId;
    }>>;
    getHotelCheckers(hotelID: string): Promise<(import("mongoose").Document<unknown, any, UserDocument> & User & Document & Required<{
        _id: Types.ObjectId;
    }>)[]>;
    getHotelCheckerById(checkerId: string): Promise<import("mongoose").Document<unknown, any, UserDocument> & User & Document & Required<{
        _id: Types.ObjectId;
    }>>;
}
