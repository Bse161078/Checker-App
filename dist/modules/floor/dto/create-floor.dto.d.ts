import { Types } from "mongoose";
export declare class CreateFloorDto {
    roomIsVacuumedStatus: boolean;
    roomIsVacuumedPhotos: string[];
    topQuestionStatus: boolean;
    samplePhotoTopQuestion: string[];
    roomIsNotVacuumedStatus: boolean;
    roomIsNotVacuumedPhotos: string[];
    roomHasStrongStainsThatCanNotBeCleanedByUsStatus: boolean;
    roomHasStrongStainsThatCanNotBeCleanedByUsPhotos: string[];
    DamageCausedByGuestsStatus: boolean;
    DamageCausedByGuestsPhotos: string[];
    DamageReportText: string;
    DamageReportPhotos: string[];
    room: Types.ObjectId;
}
