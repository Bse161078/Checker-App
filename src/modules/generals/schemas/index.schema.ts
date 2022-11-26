import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
class TopQuestionClass extends Document {
    @Prop()
    title: string;
    @Prop({ type: Boolean })
    value: boolean;
    @Prop()
    samplePhoto: string;
}
class CommentValueClass extends Document {
    @Prop({ type: Boolean })
    status: boolean;
    @Prop()
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