import { HttpStatus } from '@nestjs/common';
import { LevelService } from './level.service';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
export declare class LevelController {
    private readonly levelService;
    constructor(levelService: LevelService);
    create(createLevelDto: CreateLevelDto): Promise<{
        statusCode: HttpStatus;
        data: {
            message: string;
        };
    }>;
    findAll(): Promise<{
        statusCode: HttpStatus;
        data: {
            levels: any[];
        };
    }>;
    findOne(id: string): Promise<{
        statusCode: HttpStatus;
        data: {
            level: import("mongoose").Document<unknown, any, import("./entities/level.entity").LevelDocument> & import("./entities/level.entity").Level & Document & {
                _id: import("mongoose").Types.ObjectId;
            };
        };
    }>;
    update(id: string, updateLevelDto: UpdateLevelDto): Promise<{
        statusCode: HttpStatus;
        data: {
            message: string;
        };
    }>;
    remove(id: string): Promise<{
        statusCode: HttpStatus;
        data: {
            message: string;
        };
    }>;
}
