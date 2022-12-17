import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema()
export class Room {
    @Prop()
    name: string;
    @Prop({ref: 'RoomType'})
    roomType: Types.ObjectId
    @Prop({ref: 'Level'})
    level: Types.ObjectId
    @Prop({ref: 'User'})
    hotel: Types.ObjectId
}
export type RoomDocument = Room & Document;
export const RoomSchema = SchemaFactory.createForClass(Room)