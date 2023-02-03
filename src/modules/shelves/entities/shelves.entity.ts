import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { CommentsValueSchema, DamageReportSchema, TopQuestionSchema } from "src/modules/generals/schemas/index.schema";
import { IComments, ICommentValue, IDamageReport, ITopQuestion } from "../../check-list/interface/check-list.interface";

@Schema()
class CommentsClass extends Document {
    @Prop({ type: CommentsValueSchema })
    wiped: ICommentValue;
    @Prop({ type: CommentsValueSchema })
    tableNotClean: ICommentValue;
    @Prop({ type: CommentsValueSchema })
    sideTableNotClean: ICommentValue;
    @Prop({ type: CommentsValueSchema })
    tv: ICommentValue;
    @Prop({ type: CommentsValueSchema })
    window: ICommentValue;
    @Prop({ type: CommentsValueSchema })
    tvStandNotClean: ICommentValue;
    @Prop({ type: CommentsValueSchema })
    cabinetTopAndInsideSurfacesNotClean: ICommentValue;
    @Prop({ type: CommentsValueSchema })
    windowSillNotClean: ICommentValue;
    @Prop({ type: CommentsValueSchema })
    BrochuresNotNeatlyAndSortedInTheirPlace: ICommentValue;
}
export interface IShelvesComments {
    wiped: ICommentValue
    tableNotClean: ICommentValue
    sideTableNotClean: ICommentValue
    tv: ICommentValue
    window: ICommentValue
    tvStandNotClean: ICommentValue
    cabinetTopAndInsideSurfacesNotClean: ICommentValue
    windowSillNotClean: ICommentValue
    BrochuresNotNeatlyAndSortedInTheirPlace: ICommentValue
}
const CommentsSchema = SchemaFactory.createForClass(CommentsClass);

@Schema()
export class Shelves {
    @Prop()
    title: string;
    @Prop({ type: TopQuestionSchema })
    topQuestion: ITopQuestion;
    @Prop({ type: CommentsSchema })
    comments: IShelvesComments;
    @Prop({ type: DamageReportSchema })
    damage: IDamageReport;
    @Prop({ type: Types.ObjectId, ref: "User" })
    cleaner: Types.ObjectId;
    @Prop({ type: Types.ObjectId, ref: "User" })
    checker: Types.ObjectId;
    @Prop({ type: Types.ObjectId, ref: "Room" })
    room: Types.ObjectId;
    @Prop({ type: Types.ObjectId, ref: "User" })
    hotel: Types.ObjectId;
}
export type ShelvesDocument = Shelves & Document;
export const ShelvesSchema = SchemaFactory.createForClass(Shelves)
