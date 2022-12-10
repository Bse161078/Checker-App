import mongoose, { Types } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class Level {
    @Prop()
    title: string;
    @Prop({ ref: "User"})
    hotel: mongoose.Types.ObjectId;
}

export type LevelDocument = Level & Document;
export const LevelSchema = SchemaFactory.createForClass(Level);