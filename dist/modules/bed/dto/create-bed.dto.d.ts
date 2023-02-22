import { Types } from "mongoose";
export declare class CreateBedDto {
    topQuestionStatus: boolean;
    samplePhotoTopQuestion: string[];
    bedDoesNotLookFreshStatus: boolean;
    bedDoesNotLookFreshPhotos: string[];
    isMadeUpStatus: boolean;
    isMadeUpPhotos: string[];
    bedSheetInNotProperlyTightenedStatus: boolean;
    bedSheetInNotProperlyTightenedPhotos: string[];
    extraBedStatus: boolean;
    extraBedPhotos: string[];
    DamageReportText: string;
    DamageReportPhotos: string[];
    room: Types.ObjectId;
}
