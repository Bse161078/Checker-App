import { Types } from "mongoose";
export declare class CreateBedDto {
    topQuestionStatus: boolean;
    samplePhotoTopQuestion: string[];
    bedDoesNotLookFreshStatus: boolean;
    bedDoesNotLookFreshPhotos: string[];
    bedSheetInNotProperlyTightenedStatus: boolean;
    bedSheetInNotProperlyTightenedPhotos: string[];
    DamageReportText: string;
    DamageReportPhotos: string[];
    room: Types.ObjectId;
}
