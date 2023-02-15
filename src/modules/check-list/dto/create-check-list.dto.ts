import { ApiProperty } from "@nestjs/swagger";
import { Length } from "class-validator";
import { Types } from "mongoose";
import { CheckListSupplier } from "../enum/check-list-supplier.enum";

export class CreateCheckListDto {
 @ApiProperty({default: [
    {
        material: "materialObjectID",
        quantity: 0
    },
    {
        material: "materialObjectID",
        quantity: 2
    },
 ]})
 materials ;
 @ApiProperty({type: "string", enum: CheckListSupplier})
 supplier: CheckListSupplier
 hotel: Types.ObjectId;
 company: Types.ObjectId;
 checker: Types.ObjectId;
}
