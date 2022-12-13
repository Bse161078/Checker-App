import { Types } from "mongoose";
export declare class CreateBathroomDto {
    topQuestionStatus: boolean;
    samplePhotoTopQuestion: string[];
    tilesAreNotMoppedStatus: boolean;
    tilesAreNotMoppedPhotos: string[];
    toiletIsNotWipedStatus: boolean;
    toiletIsNotWipedPhotos: string[];
    thereIsDirtInTheShoweStatus: boolean;
    thereIsDirtInTheShowePhotos: string[];
    shelvesAreNotWipedStatus: boolean;
    shelvesAreNotWipedPhotos: string[];
    traysAreNotFilledStatus: boolean;
    traysAreNotFilledPhotos: string[];
    DamageReportText: string;
    DamageReportPhotos: string[];
    room: Types.ObjectId;
}
