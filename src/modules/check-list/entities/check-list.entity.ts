import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { IComments, IDamageReport, ITopQuestion } from "../interface/check-list.interface";
import { ApiProperty } from "@nestjs/swagger";
import { CheckListSupplier } from "../enum/check-list-supplier.enum";
import {Material} from "../../material-list/entities/material-list.entity";

@Schema()
export class CheckList {
    @Prop({type: [{
           material:{type: Types.ObjectId, ref: "Material"},
            quantity:{type: Number},

        }]})
    @ApiProperty()
    materials;
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
