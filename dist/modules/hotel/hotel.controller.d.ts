import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { CreateHotelCleanerDto, HotelDto } from './dto/hotel.dto';
import { MulterFile } from 'src/common/types/public';
export declare class HotelController {
    private readonly hotelService;
    constructor(hotelService: HotelService);
    create(createHotelDto: CreateHotelDto): Promise<{
        message: string;
    }>;
    createHotelCleaner(avatar: MulterFile, createCleanerDto: CreateHotelCleanerDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<{
        hotels: (import("mongoose").Document<unknown, any, import("../user/entities/user.entity").UserDocument> & import("../user/entities/user.entity").User & Document & Required<{
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
