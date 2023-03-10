import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { ROLES } from "../../../common/enums/role.enum";

@Schema({timestamps: true})
export class User {
    @Prop({_id: true, default: Types.ObjectId})
    _id: Types.ObjectId;
    @Prop()
    fullname: string
    @Prop()
    hotel_name: string
    @Prop()
    company_name: string
    @Prop()
    avatar: string;
    @Prop()
    logo: string;
    @Prop({unique: true, index: true, type: String})
    username: string
    @Prop()
    password: string
    @Prop()
    email: string
    @Prop()
    mobile: string;
    @Prop()
    address: string;
    @Prop({default: []})
    phones: string[]
    @Prop()
    role: ROLES
    @Prop({ref: "User"})
    hotel: Types.ObjectId
    @Prop({ref: "User"})
    company: Types.ObjectId
    @Prop()
    accessToken: string;
    @Prop()
    salaryPerRoom: string;
    @Prop()
    roomCountForCleanEachDay: string;
}
export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User)