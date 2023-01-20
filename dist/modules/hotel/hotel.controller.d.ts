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
