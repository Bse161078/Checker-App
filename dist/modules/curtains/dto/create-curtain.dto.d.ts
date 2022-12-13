import { Types } from "mongoose";
export declare class CreateCurtainDto {
    topQuestionStatus: boolean;
    samplePhotoTopQuestion: string[];
    curtainsNotCleanStatus: boolean;
    curtainsNotCleanPhotos: string[];
    curtainsHaveWrinklesStatus: boolean;
    curtainsHaveWrinklesPhotos: string[];
    DamageReportText: string;
    DamageReportPhotos: string[];
    room: Types.ObjectId;
}
