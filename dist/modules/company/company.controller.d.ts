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
