import mongoose from "mongoose";
export declare class Level {
    title: string;
    hotel: mongoose.Types.ObjectId;
}
export type LevelDocument = Level & Document;
export declare const LevelSchema: mongoose.Schema<Level, mongoose.Model<Level, any, any, any, any>, {}, {}, {}, {}, "type", Level>;
