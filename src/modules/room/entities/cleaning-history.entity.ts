import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { ROLES } from "src/common/enums/role.enum";
import {PRICE_STATUS, ROOM_STATUS} from "src/common/enums/room-status.enum";
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
        type: {
            roomIsNotVacuumed:{
                status:{type:Boolean,default:false},
                photos:{type:[String],default:""},
                text:{type:String,default:""}

            },
            report:{
                status:{type:Boolean,default:false},
                photos:{type:[String],default:""},
                text:{type:String,default:""}
            },
            roomHasStrongStainsThatCanNotBeCleanedByUs:{
                status:{type:Boolean,default:false},
                photos:{type:[String],default:""},
                text:{type:String,default:""}
            },
            damageCausedByGuests:{
                status:{type:Boolean,default:false},
                photos:{type:[String],default:""},
                text:{type:String,default:""}
            }
        },
        default: {},
    })
    mistakes;


    @Prop({default: PRICE_STATUS.NORMAL})
    price: PRICE_STATUS;


    @Prop({type:Date,default: Date.now})
    date;


}
export type CleaningHistoryDocument = CleaningHistory & Document;
export const CleaningHistorySchema = SchemaFactory.createForClass(CleaningHistory);