import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Types } from "mongoose";

@Schema({timestamps: {createdAt: true}, toObject: {virtuals: true}})
export class OrderMaterial {
    @Prop()
    @ApiProperty()
    quantity: Number;
    @Prop({ref: "Material"})
    material: Types.ObjectId;
    @Prop({ref: "User"})
    checker: Types.ObjectId;

    @Prop({ref: "User"})
    hotel: Types.ObjectId;

}
export type MaterialOrderDocument = OrderMaterial & Document;
export const MaterialOrderSchema = SchemaFactory.createForClass(OrderMaterial)