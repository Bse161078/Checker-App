import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Length } from "class-validator";
import { Types } from "mongoose";

@Schema({toObject: {
    virtuals: true
}})
export class RoomType {
    @Prop()
    @ApiProperty()
    @Length(3)
    title: string
    @Prop()
    @ApiPropertyOptional()
    title_de: string
    @Prop({ref: "User"})
    hotel: Types.ObjectId
}
export type RoomTypeDocument = RoomType & Document;
export const RoomTypeSchema = SchemaFactory.createForClass(RoomType)