import { MaterialListService } from './material-list.service';
import { CreateMaterialListDto } from './dto/create-material-list.dto';
import { UpdateMaterialListDto } from './dto/update-material-list.dto';
import { OrderMaterialDto } from "./dto/materila.dto";
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
    createOrder(id: string, creatMaterialOrder: OrderMaterialDto): Promise<{
        message: string;
        order: any;
    }>;
}
