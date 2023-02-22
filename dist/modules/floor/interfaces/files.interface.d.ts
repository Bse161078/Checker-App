import { MulterFile } from "src/common/types/public";
export interface IFloorFilesUpload {
    samplePhotoTopQuestion: MulterFile[];
    roomIsVacuumedPhotos: MulterFile[];
    roomIsNotVacuumedPhotos: MulterFile[];
    roomHasStrongStainsThatCanNotBeCleanedByUsPhotos: MulterFile[];
    DamageCausedByGuestsPhotos: MulterFile[];
    DamageReportPhotos: MulterFile[];
}
