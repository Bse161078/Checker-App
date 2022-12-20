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
import { AddCompanyToHotel, CreateHotelDto } from './dto/create-hotel.dto';
import { User, UserDocument } from '../user/entities/user.entity';
import { Model, Types } from 'mongoose';
import { AuthService } from '../auth/services/auth.service';
import { CreateHotelCheckerDto, CreateHotelCleanerDto, CreateHotelReceptionDto } from './dto/hotel.dto';
export declare class HotelService {
    private userRepository;
    private authService;
    constructor(userRepository: Model<UserDocument>, authService: AuthService);
    create(createHotelDto: CreateHotelDto): Promise<import("mongoose").Document<unknown, any, UserDocument> & User & Document & Required<{
        _id: Types.ObjectId;
    }>>;
    createCleaner(createCleanerDto: CreateHotelCleanerDto): Promise<import("mongoose").Document<unknown, any, UserDocument> & User & Document & Required<{
        _id: Types.ObjectId;
    }>>;
    addCompanyToHotel(hotelID: string, addCompanyDto: AddCompanyToHotel): Promise<boolean>;
    createChecker(createCheckerDto: CreateHotelCheckerDto): Promise<import("mongoose").Document<unknown, any, UserDocument> & User & Document & Required<{
        _id: Types.ObjectId;
    }>>;
    createReception(createReceptionDto: CreateHotelReceptionDto): Promise<import("mongoose").Document<unknown, any, UserDocument> & User & Document & Required<{
        _id: Types.ObjectId;
    }>>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, UserDocument> & User & Document & Required<{
        _id: Types.ObjectId;
    }>)[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, any, UserDocument> & User & Document & Required<{
        _id: Types.ObjectId;
    }>>;
    remove(id: string): Promise<boolean>;
    receptions(hotel: string): Promise<(import("mongoose").Document<unknown, any, UserDocument> & User & Document & Required<{
        _id: Types.ObjectId;
    }>)[]>;
}
