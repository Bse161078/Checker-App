import { BillsService } from './bills.service';
import { CreateBillDto } from './dto/create-bill.dto';
export declare class BillsController {
    private readonly billsService;
    constructor(billsService: BillsService);
    create(createBillDto: CreateBillDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<{
        bills: (import("mongoose").Document<unknown, any, import("./entities/bill.entity").BillDocument> & import("./entities/bill.entity").Bill & Document & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getByCleaner(id: string): Promise<{
        bill: import("mongoose").Document<unknown, any, import("./entities/bill.entity").BillDocument> & import("./entities/bill.entity").Bill & Document & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    findOne(id: string): Promise<{
        bill: import("mongoose").Document<unknown, any, import("./entities/bill.entity").BillDocument> & import("./entities/bill.entity").Bill & Document & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
}
