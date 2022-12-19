import { ApiProperty } from "@nestjs/swagger";
import { Length } from "class-validator";
import { IMaterialList } from "../entities/check-list.entity";
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
 materials : IMaterialList[];
 @ApiProperty({type: "string", enum: CheckListSupplier})
 supplier: CheckListSupplier
 hotel: Types.ObjectId;
 company: Types.ObjectId;
 checker: Types.ObjectId;
}
