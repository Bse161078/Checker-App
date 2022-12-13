import { AdminCheckListService } from './check-list.service';
import { CreateCheckListDto } from './dto/create-check-list.dto';
import { UpdateCheckListDto } from './dto/update-check-list.dto';
export declare class AdminCheckListController {
    private readonly checkListService;
    constructor(checkListService: AdminCheckListService);
    create(createCheckListDto: CreateCheckListDto): string | CreateCheckListDto;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCheckListDto: UpdateCheckListDto): string;
    remove(id: string): string;
}
