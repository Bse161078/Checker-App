import { MulterFile } from "src/common/types/public"

export interface IBedFilesUpload {
    samplePhotoTopQuestion: MulterFile[]
    bedDoesNotLookFreshPhotos: MulterFile[]
    isMadeUpPhotos: MulterFile[]
    bedSheetInNotProperlyTightenedPhotos: MulterFile[],
    extraBedPhotos: MulterFile[],
    DamageReportPhotos: MulterFile[]
}