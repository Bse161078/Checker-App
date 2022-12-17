import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Length } from "class-validator";
import { Types } from "mongoose";

@Schema()
export class RoomType {
    @Prop()
    @ApiProperty()
    @Length(3)
    title: string
    @Prop()
    hotel: Types.ObjectId
}
export type RoomTypeDocument = RoomType & Document;
export const RoomTypeSchema = SchemaFactory.createForClass(RoomType)