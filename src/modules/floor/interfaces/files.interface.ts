import { MulterFile } from "src/common/types/public"

export interface IFloorFilesUpload {
    samplePhotoTopQuestion: MulterFile[]
    roomIsNotVacuumedPhotos: MulterFile[]
    roomHasStrongStainsThatCanNotBeCleanedByUsPhotos: MulterFile[]
    DamageCausedByGuestsPhotos: MulterFile[]
    DamageReportPhotos: MulterFile[]
}