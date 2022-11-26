import { Types } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class Level {
    @Prop()
    title: string;
}

export type LevelDocument = Level & Document;
export const LevelSchema = SchemaFactory.createForClass(Level);