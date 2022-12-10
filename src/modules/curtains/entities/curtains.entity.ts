import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { CommentsValueSchema, DamageReportSchema, TopQuestionSchema } from "src/modules/generals/schemas/index.schema";
import { ICommentValue, IDamageReport, ITopQuestion } from "../../check-list/interface/check-list.interface";

@Schema()
class CommentsClass extends Document {
    @Prop({type: CommentsValueSchema })
    curtainsNotClean: ICommentValue;
    @Prop({type: CommentsValueSchema })
    curtainsHaveWrinkles: ICommentValue;

}
interface ICurtainComment {
    curtainsNotClean: ICommentValue;
    curtainsHaveWrinkles: ICommentValue;
}
const CommentsSchema = SchemaFactory.createForClass(CommentsClass);

@Schema()
export class Curtain {
    @Prop()
    title: string;
    @Prop({ type: TopQuestionSchema })
    topQuestion: ITopQuestion;
    @Prop({ type: CommentsSchema })
    comments: ICurtainComment;
    @Prop({ type: DamageReportSchema })
    damage: IDamageReport;
    @Prop({type: Types.ObjectId, ref: "User"})
    cleaner: Types.ObjectId;
    @Prop({type: Types.ObjectId, ref: "Room"})
    room: Types.ObjectId;
    @Prop({type: Types.ObjectId, ref: "User"})
    hotel: Types.ObjectId;
    @Prop({type: Types.ObjectId, ref: "User"})
    checker: Types.ObjectId;
}
export type CurtainDocument = Curtain & Document;
export const CurtainSchema = SchemaFactory.createForClass(Curtain)
