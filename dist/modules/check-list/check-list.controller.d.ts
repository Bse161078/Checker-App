import { CheckListService } from './check-list.service';
import { CreateCheckListDto } from './dto/create-check-list.dto';
export declare class CheckListController {
    private readonly checkListService;
    constructor(checkListService: CheckListService);
    create(createCheckListDto: CreateCheckListDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<{
        checkList: (import("mongoose").Document<any, any, any> & import("./entities/check-list.entity").CheckList & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    findOne(id: string): Promise<{
        checkList: import("mongoose").Document<any, any, any> & import("./entities/check-list.entity").CheckList & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
