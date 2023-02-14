import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { ROLES } from "src/common/enums/role.enum";
import { ROOM_STATUS } from "src/common/enums/room-status.enum";
import {CheckerRoomStatus, RoomStatus} from "../enum/room-type.enum";

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
    @Prop({default: ROOM_STATUS.START})
    status: ROOM_STATUS;
    @Prop()
    checkerStatus: CheckerRoomStatus;
    @Prop({type:Boolean,default: false})
    checkoutStatus: boolean;

    @Prop({
        type: [{type:String,enum:RoomStatus,default:RoomStatus.CleanAgain}],
        default: [],
    })
    mistakes;

    @Prop({type:Date,default: Date.now})
    date;


}
export type CleaningHistoryDocument = CleaningHistory & Document;
export const CleaningHistorySchema = SchemaFactory.createForClass(CleaningHistory);