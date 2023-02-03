import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { PartialType } from "@nestjs/swagger";
import { Document, Types } from "mongoose";
import { CommentsValueSchema, DamageReportSchema, TopQuestionSchema } from "src/modules/generals/schemas/index.schema";
import { ICommentValue, IDamageReport, ITopQuestion } from "../../check-list/interface/check-list.interface";

@Schema()
class CommentsClass extends Document{
    @Prop({type: CommentsValueSchema })
    roomIsNotVacuumed: ICommentValue;
    @Prop({type: CommentsValueSchema })
    roomIsVacuumed: ICommentValue;
    @Prop({type: CommentsValueSchema })
    roomHasStrongStainsThatCanNotBeCleanedByUs: ICommentValue;
    @Prop({type: CommentsValueSchema })
    DamageCausedByGuests: ICommentValue;
}
const CommentsSchema = SchemaFactory.createForClass(CommentsClass);
interface IFloorComments {
    roomIsVacuumed: ICommentValue;
    roomIsNotVacuumed: ICommentValue;
    roomHasStrongStainsThatCanNotBeCleanedByUs: ICommentValue;
    DamageCausedByGuests: ICommentValue;
}
@Schema({timestamps: true})
export class Floor {
    @Prop({ type: TopQuestionSchema })
    topQuestion: ITopQuestion;
    @Prop({ type: CommentsSchema })
    comments: IFloorComments;
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
export type FloorDocument = Floor & Document;
export const FloorSchema = SchemaFactory.createForClass(Floor)
