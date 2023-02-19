import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Types} from "mongoose";
import {CheckerRoomStatus, RoomOccupationStatus, RoomStatus, RoomType} from "../enum/room-type.enum";

@Schema()
export class Room {
    @Prop()
    name: string;
    @Prop()
    name_de: string;
    @Prop({type: [String], enum: [RoomStatus], default: []})
    report: string
    @Prop({type: String, enum: CheckerRoomStatus, default: CheckerRoomStatus.NotCleaned})
    cleaning_status: string;
    @Prop({type: String, enum: RoomOccupationStatus, default: RoomOccupationStatus.Free})
    occupation_status: string;
    @Prop({type: String, default: ""})
    roomType: string;

    @Prop({ type: Number, default:0 })
    price: Number

    @Prop({ref: 'Level'})
    level: Types.ObjectId
    @Prop({ref: 'User'})
    hotel: Types.ObjectId
    @Prop({ref: 'User'})
    cleaner: Types.ObjectId
}

export type RoomDocument = Room & Document;
export const RoomSchema = SchemaFactory.createForClass(Room)