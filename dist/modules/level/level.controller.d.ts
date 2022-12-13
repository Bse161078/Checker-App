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
import { HttpStatus } from '@nestjs/common';
import { LevelService } from './level.service';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
export declare class LevelController {
    private readonly levelService;
    constructor(levelService: LevelService);
    create(createLevelDto: CreateLevelDto, user: Express.User): Promise<import("mongoose").Document<unknown, any, import("./entities/level.entity").LevelDocument> & import("./entities/level.entity").Level & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<{
        levels: any[];
    }>;
    findOne(id: string): Promise<{
        level: any;
    }>;
    update(id: string, updateLevelDto: UpdateLevelDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        statusCode: HttpStatus;
        data: {
            message: string;
        };
    }>;
}
