import { MulterFile } from "src/common/types/public";
export interface IBathRoomFilesUpload {
    samplePhotoTopQuestion: MulterFile[];
    tilesAreNotMoppedPhotos: MulterFile[];
    toiletIsNotWipedPhotos: MulterFile[];
    thereIsDirtInTheShowePhotos: MulterFile[];
    shelvesAreNotWipedPhotos: MulterFile[];
    traysAreNotFilledPhotos: MulterFile[];
    DamageReportPhotos: MulterFile[];
}
