import { MulterFile } from "src/common/types/public"

export interface ICurtainFilesUpload {
    samplePhotoTopQuestion: MulterFile[]
    curtainsNotCleanPhotos: MulterFile[]
    curtainsHaveWrinklesPhotos: MulterFile[]
    DamageReportPhotos: MulterFile[]
}