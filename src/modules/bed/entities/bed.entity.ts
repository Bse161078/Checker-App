import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { CommentsValueSchema, DamageReportSchema, TopQuestionSchema } from "src/modules/generals/schemas/index.schema";
import { IComments, ICommentValue, IDamageReport, ITopQuestion } from "../../check-list/interface/check-list.interface";

@Schema()
class CommentsClass extends Document {
    @Prop({type: CommentsValueSchema })
    bedDoesNotLookFresh: ICommentValue;
    @Prop({type: CommentsValueSchema })
    bedSheetInNotProperlyTightened: ICommentValue;
}
const CommentsSchema = SchemaFactory.createForClass(CommentsClass);
interface IBedComments {
    bedDoesNotLookFresh: ICommentValue
    bedSheetInNotProperlyTightened: ICommentValue
}
@Schema()
export class Bed {
    @Prop()
    title: string;
    @Prop({ type: TopQuestionSchema })
    topQuestion: ITopQuestion;
    @Prop({ type: CommentsSchema })
    comments: IBedComments;
    @Prop({ type: DamageReportSchema })
    damage: IDamageReport;
    @Prop({type: Types.ObjectId, ref: "User"})
    cleaner: Types.ObjectId;
    @Prop({type: Types.ObjectId, ref: "User"})
    checker: Types.ObjectId;
    @Prop({type: Types.ObjectId, ref: "Room"})
    room: Types.ObjectId;
    @Prop({type: Types.ObjectId, ref: "User"})
    hotel: Types.ObjectId;
}
export type BedDocument = Bed & Document;
export const BedSchema = SchemaFactory.createForClass(Bed)
