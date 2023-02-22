import { HotelService } from './hotel.service';
import { AddCompanyToHotel, CreateHotelDto } from './dto/create-hotel.dto';
import { CreateHotelCheckerDto, CreateHotelCleanerDto, CreateHotelReceptionDto, HotelDto, UpdateHotelLogoDto } from './dto/hotel.dto';
import { MulterFile } from 'src/common/types/public';
import { LogoFileUploadDto } from "./interface/files.interface";
export declare class HotelController {
    private readonly hotelService;
    constructor(hotelService: HotelService);
    create(avatar: MulterFile, createHotelDto: CreateHotelDto): Promise<{
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
        receptions: Omit<import("mongoose").Document<unknown, any, import("../user/entities/user.entity").UserDocument> & import("../user/entities/user.entity").User & Document & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, never>[];
    }>;
    findOne(hotelDto: HotelDto): Promise<{
        hotel: import("mongoose").Document<unknown, any, import("../user/entities/user.entity").UserDocument> & import("../user/entities/user.entity").User & Document & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
    remove(hotelDto: HotelDto): Promise<{
        message: string;
    }>;
    updateHotelLogo(logo: LogoFileUploadDto, updateHotelLogoDto: UpdateHotelLogoDto): Promise<{
        message: string;
    }>;
    findHotelLogo(hotelDto: HotelDto): Promise<{
        hotel: import("mongoose").Document<unknown, any, import("../user/entities/user.entity").UserDocument> & import("../user/entities/user.entity").User & Document & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
    getHotelReport(hotelDto: HotelDto): Promise<{
        cleaners: import("mongoose").Document<unknown, any, import("../user/entities/user.entity").UserDocument> & import("../user/entities/user.entity").User & Document & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
}
