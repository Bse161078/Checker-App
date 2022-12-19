import { MulterFile } from 'src/common/types/public';
import { CheckerService } from './checker.service';
import { CreateCheckerDto } from './dto/create-checker.dto';
import { UpdateCheckerDto } from './dto/update-checker.dto';
import { CompanyIdDto, HotelIdDto } from '../cleaner/dto/cleaner.dto';
import { CheckerIdDto } from './dto/checker.dto';
export declare class CheckerController {
    private readonly checkerService;
    constructor(checkerService: CheckerService);
    create(avatar: MulterFile, createCheckerDto: CreateCheckerDto): Promise<{
        checker: import("mongoose").Document<unknown, any, import("../user/entities/user.entity").UserDocument> & import("../user/entities/user.entity").User & Document & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
    findAll(): Promise<{
        checkers: (import("mongoose").Document<unknown, any, import("../user/entities/user.entity").UserDocument> & import("../user/entities/user.entity").User & Document & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
    }>;
    getCheckerCompany(param: CompanyIdDto, user: Express.User): Promise<{
        checkers: (import("mongoose").Document<unknown, any, import("../user/entities/user.entity").UserDocument> & import("../user/entities/user.entity").User & Document & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
    }>;
    getCheckerCompanyById(param: CheckerIdDto, user: Express.User): Promise<{
        checker: import("mongoose").Document<unknown, any, import("../user/entities/user.entity").UserDocument> & import("../user/entities/user.entity").User & Document & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
    getCleanerHotel(param: HotelIdDto, user: Express.User): Promise<{
        checkers: (import("mongoose").Document<unknown, any, import("../user/entities/user.entity").UserDocument> & import("../user/entities/user.entity").User & Document & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
    }>;
    getCleanerHotelById(param: CheckerIdDto, user: Express.User): Promise<{
        checker: import("mongoose").Document<unknown, any, import("../user/entities/user.entity").UserDocument> & import("../user/entities/user.entity").User & Document & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
    findOne(id: string): {
        checker: Promise<import("mongoose").Document<unknown, any, import("../user/entities/user.entity").UserDocument> & import("../user/entities/user.entity").User & Document & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>>;
    };
    update(id: string, updateCheckerDto: UpdateCheckerDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
