import { CreateCheckListDto } from './dto/create-check-list.dto';
import { UpdateCheckListDto } from './dto/update-check-list.dto';
export declare class AdminCheckListService {
    create(createCheckListDto: CreateCheckListDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCheckListDto: UpdateCheckListDto): string;
    remove(id: number): string;
}
