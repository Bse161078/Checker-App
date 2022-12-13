import { Types } from "mongoose";
export declare class CreateShelvesDto {
    topQuestionStatus: boolean;
    samplePhotoTopQuestion: string;
    tableNotCleanStatus: boolean;
    tableNotCleanPhotos: string[];
    sideTableNotCleanStatus: boolean;
    sideTableNotCleanPhotos: string[];
    tvStandNotCleanStatus: boolean;
    tvStandNotCleanPhotos: string[];
    cabinetTopAndInsideSurfacesNotCleanStatus: boolean;
    cabinetTopAndInsideSurfacesNotCleanPhotos: string[];
    windowSillNotCleanStatus: boolean;
    windowSillNotCleanPhotos: string[];
    BrochuresNotNeatlyAndSortedInTheirPlaceStatus: boolean;
    BrochuresNotNeatlyAndSortedInTheirPlacePhotos: string[];
    DamageReportText: string;
    DamageReportPhotos: string[];
    room: Types.ObjectId;
}
