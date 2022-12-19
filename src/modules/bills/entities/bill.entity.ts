import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Types } from "mongoose"
import { ROLES } from "src/common/enums/role.enum"

@Schema()
export class Bill {
    @Prop({default: false})
    checkout: boolean
    @Prop()
    checkoutDate: Date
    @Prop()
    checkoutAmount: number
    @Prop()
    settler: Types.ObjectId
    @Prop()
    roleOfSettler: ROLES
    @Prop({ref: "User"})
    cleaner: Types.ObjectId
    @Prop()
    hotel: Types.ObjectId
    @Prop()
    company: Types.ObjectId
}
export type BillDocument = Bill & Document;
export const BillSchema = SchemaFactory.createForClass(Bill)