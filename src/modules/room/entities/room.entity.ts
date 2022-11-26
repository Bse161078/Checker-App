import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { RoomType } from "../enum/room-type.enum";

@Schema()
export class Room {
    @Prop()
    name: string;
    @Prop({enum: RoomType})
    type: RoomType
    @Prop({ref: 'Room'})
    level: Types.ObjectId
}
export type RoomDocument = Room & Document;
export const RoomSchema = SchemaFactory.createForClass(Room)