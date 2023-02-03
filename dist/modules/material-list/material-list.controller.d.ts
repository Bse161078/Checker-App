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
import { MaterialListService } from './material-list.service';
import { CreateMaterialListDto } from './dto/create-material-list.dto';
import { UpdateMaterialListDto } from './dto/update-material-list.dto';
export declare class MaterialListController {
    private readonly materialListService;
    constructor(materialListService: MaterialListService);
    create(createMaterialListDto: CreateMaterialListDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<{
        materials: Omit<Omit<import("mongoose").Document<unknown, any, import("./entities/material-list.entity").MaterialDocument> & import("./entities/material-list.entity").Material & Document & {
            _id: import("mongoose").Types.ObjectId;
        }, never>, never>[];
    }>;
    findOne(id: string): Promise<{
        material: import("mongoose").Document<unknown, any, import("./entities/material-list.entity").MaterialDocument> & import("./entities/material-list.entity").Material & Document & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    update(id: string, updateMaterialListDto: UpdateMaterialListDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
