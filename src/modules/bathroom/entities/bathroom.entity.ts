import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { CommentsValueSchema, DamageReportSchema, TopQuestionSchema } from "src/modules/generals/schemas/index.schema";
import { ICommentValue, IDamageReport, ITopQuestion } from "../../check-list/interface/check-list.interface";

@Schema()
class CommentsClass extends Document {
    @Prop({type: CommentsValueSchema })
    tilesAreNotMopped: ICommentValue;
    @Prop({type: CommentsValueSchema })
    toiletIsNotWiped: ICommentValue;
    @Prop({type: CommentsValueSchema })
    thereIsDirtInTheShowe: ICommentValue;
    @Prop({type: CommentsValueSchema })
    shelvesAreNotWiped: ICommentValue;
    @Prop({type: CommentsValueSchema })
    traysAreNotFilled: ICommentValue;

}
const CommentsSchema = SchemaFactory.createForClass(CommentsClass);
export interface IBathRoomComment {
    tilesAreNotMopped: ICommentValue;
    toiletIsNotWiped: ICommentValue;
    thereIsDirtInTheShowe: ICommentValue;
    shelvesAreNotWiped: ICommentValue;
    traysAreNotFilled: ICommentValue;
}
@Schema()
export class BathRoom {
    @Prop()
    title: string;
    @Prop({ type: TopQuestionSchema })
    topQuestion: ITopQuestion;
    @Prop({ type: CommentsSchema })
    comments: IBathRoomComment;
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
export type BathRoomDocument = BathRoom & Document;
export const BathRoomSchema = SchemaFactory.createForClass(BathRoom)
