import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
class TopQuestionClass extends Document {
    @Prop({ type: Boolean })
    value: boolean;
    @Prop({default: []})
    samplePhoto: string[];
}
@Schema()
class CommentValueClass extends Document {
    @Prop({ type: Boolean })
    status: boolean;
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

export const CommentsValueSchema = SchemaFactory.createForClass(CommentValueClass);
export const TopQuestionSchema = SchemaFactory.createForClass(TopQuestionClass);
export const DamageReportSchema = SchemaFactory.createForClass(DamageReportClass);