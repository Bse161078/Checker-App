import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { IComments, IDamageReport, ITopQuestion } from "../interface/check-list.interface";

@Schema()
class TopQuestionClass extends Document {
    @Prop()
    title: string;
    @Prop({ type: Boolean })
    value: boolean;
    @Prop()
    samplePhoto: string;
}
@Schema()
class CommentsClass extends Document {
    @Prop()
    title: string;
    @Prop({ type: Boolean })
    value: boolean;
    @Prop({default: []})
    photos: string[];
}
@Schema()
class DamageReportClass extends Document {
    @Prop()
    text: string;
    @Prop({default: []})
    photos: string[];
}
const TopQuestionSchema = SchemaFactory.createForClass(TopQuestionClass);
const CommentsSchema = SchemaFactory.createForClass(CommentsClass);
const DamageReportSchema = SchemaFactory.createForClass(DamageReportClass);

export class CheckList {
    @Prop()
    title: string;
    @Prop({ type: TopQuestionSchema })
    topQuestion: ITopQuestion;
    @Prop({ type: [CommentsSchema] })
    comments: IComments[];
    @Prop({ type: [DamageReportSchema] })
    damage: IDamageReport[];
    @Prop({type: Types.ObjectId, ref: "User"})
    cleaner: Types.ObjectId;
    @Prop({type: Types.ObjectId, ref: "Room"})
    room: Types.ObjectId;
    @Prop({type: Types.ObjectId, ref: "User"})
    hotel: Types.ObjectId;
}
export type CheckListDocument = Document & CheckList;
export const CheckListSchema = SchemaFactory.createForClass(CheckList)
