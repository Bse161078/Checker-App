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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { HotelService } from './hotel.service';
import { AddCompanyToHotel, CreateHotelDto } from './dto/create-hotel.dto';
import { CreateHotelCheckerDto, CreateHotelCleanerDto, CreateHotelReceptionDto, HotelDto } from './dto/hotel.dto';
import { MulterFile } from 'src/common/types/public';
export declare class HotelController {
    private readonly hotelService;
    constructor(hotelService: HotelService);
    create(createHotelDto: CreateHotelDto): Promise<{
        message: string;
    }>;
    addCompanyToHotel(hotelID: string, addCompanyDto: AddCompanyToHotel): Promise<{
        message: string;
    }>;
    createHotelCleaner(avatar: MulterFile, createCleanerDto: CreateHotelCleanerDto): Promise<{
        message: string;
    }>;
    createHotelReception(createReceptionDto: CreateHotelReceptionDto): Promise<{
        message: string;
    }>;
    createHotelChecker(avatar: MulterFile, createCheckerDto: CreateHotelCheckerDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<{
        hotels: (import("mongoose").Document<unknown, any, import("../user/entities/user.entity").UserDocument> & import("../user/entities/user.entity").User & Document & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
    }>;
    receptions(hotelDto: HotelDto): Promise<{
        receptions: (import("mongoose").Document<unknown, any, import("../user/entities/user.entity").UserDocument> & import("../user/entities/user.entity").User & Document & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
    }>;
    findOne(hotelDto: HotelDto): Promise<{
        hotel: import("mongoose").Document<unknown, any, import("../user/entities/user.entity").UserDocument> & import("../user/entities/user.entity").User & Document & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
    remove(hotelDto: HotelDto): Promise<{
        message: string;
    }>;
}
