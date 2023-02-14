import { MulterFile } from "src/common/types/public"

export interface MistakesFileUpload {
    roomIsNotVacuumedPhotos: MulterFile[]
    roomHasStrongStainsThatCanNotBeCleanedByUsPhotos: MulterFile[]
    damageCausedByGuestsPhotos: MulterFile[]
    reportPhotos: MulterFile[]
}