import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Types } from "mongoose";

@Schema({timestamps: {createdAt: true}, toObject: {virtuals: true}})
export class Material {
    @Prop()
    @ApiProperty()
    name: string;
    @Prop()
    @ApiProperty()
    name_de: string;
    @Prop()
    @ApiPropertyOptional()
    price?: number;
    @Prop()
    @ApiProperty()
    quantity: string;
    @Prop({ref: "User"})
    hotel: Types.ObjectId;
    @Prop({ref: "User"})
    checker: Types.ObjectId;
}
export type MaterialDocument = Material & Document;
export const MaterialSchema = SchemaFactory.createForClass(Material)