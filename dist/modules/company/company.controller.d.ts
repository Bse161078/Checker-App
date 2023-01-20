import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { CompanyDto, CreateCompanyCheckerDto, CreateCompanyCleanerDto } from './dto/company.dto';
import { MulterFile } from 'src/common/types/public';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    create(createCompanyDto: CreateCompanyDto): Promise<{
        message: string;
    }>;
    createHotelCleaner(avatar: MulterFile, createCleanerDto: CreateCompanyCleanerDto): Promise<{
        message: string;
    }>;
    createHotelChecker(avatar: MulterFile, createCheckerDto: CreateCompanyCheckerDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<{
        companies: (import("mongoose").Document<unknown, any, import("../user/entities/user.entity").UserDocument> & import("../user/entities/user.entity").User & Document & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
    }>;
    findOne(companyDto: CompanyDto): Promise<{
        company: import("mongoose").Document<unknown, any, import("../user/entities/user.entity").UserDocument> & import("../user/entities/user.entity").User & Document & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
    remove(companyDto: CompanyDto): Promise<{
        message: string;
    }>;
}
