import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { IComments, IDamageReport, ITopQuestion } from "../interface/check-list.interface";
import { ApiProperty } from "@nestjs/swagger";
import { CheckListSupplier } from "../enum/check-list-supplier.enum";
@Schema()
export class MaterialList extends Document {
    @Prop()
    material: Types.ObjectId;
    @Prop()
    quantity: number;
}
export interface IMaterialList {
    material: Types.ObjectId;
    quantity: number;
}
export class CheckList {
    @Prop({type: [MaterialList]})
    @ApiProperty()
    materials: IMaterialList[];
    @Prop()
    @ApiProperty({type: "string", enum: CheckListSupplier})
    supplier: CheckListSupplier
    @Prop({type: Types.ObjectId, ref: "User"})
    company: Types.ObjectId;
    @Prop({type: Types.ObjectId, ref: "User"})
    hotel: Types.ObjectId;
    @Prop({type: Types.ObjectId, ref: "User"})
    checker: Types.ObjectId;
}
export type CheckListDocument = Document & CheckList;
export const CheckListSchema = SchemaFactory.createForClass(CheckList)
