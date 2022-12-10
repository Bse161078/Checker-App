import { MulterFile } from "src/common/types/public"

export interface IBethRoomFilesUpload {
    samplePhotoTopQuestion: MulterFile[]
    tilesAreNotMoppedPhotos: MulterFile[]
    toiletIsNotWipedPhotos: MulterFile[]
    thereIsDirtInTheShowePhotos: MulterFile[]
    shelvesAreNotWipedPhotos: MulterFile[]
    traysAreNotFilledPhotos: MulterFile[]
    DamageReportPhotos: MulterFile[]
}