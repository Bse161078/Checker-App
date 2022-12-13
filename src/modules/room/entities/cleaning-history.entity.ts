import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { ROOM_STATUS } from "src/common/enums/room-status.enum";

@Schema({timestamps: true})
export class CleaningHistory {
    @Prop({ref: "User"})
    cleaner: Types.ObjectId;
    @Prop()
    cleaningStartAt: string;
    @Prop()
    cleaningEndAt: string;
    @Prop({ref: "Room"})
    room: Types.ObjectId;
    @Prop({ref: "User"})
    checker: Types.ObjectId
    @Prop({default: ROOM_STATUS.PENDING})
    status: ROOM_STATUS
}
export type CleaningHistoryDocument = CleaningHistory & Document;
export const CleaningHistorySchema = SchemaFactory.createForClass(CleaningHistory);