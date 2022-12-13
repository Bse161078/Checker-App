import { BathroomService } from './bathroom.service';
import { CreateBathroomDto } from './dto/create-bathroom.dto';
import { IBathRoomFilesUpload } from './interfaces/files.interface';
export declare class BathroomController {
    private readonly bathroomService;
    constructor(bathroomService: BathroomService);
    saveBathRoomData(files: IBathRoomFilesUpload, createBathroomDto: CreateBathroomDto): Promise<{
        message: string;
    }>;
}
