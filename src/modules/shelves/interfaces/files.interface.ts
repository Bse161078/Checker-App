import { MulterFile } from "src/common/types/public"

export interface IShelvesFilesUpload {
    samplePhotoTopQuestion: MulterFile[]
    wipedPhotos: MulterFile[]
    tableNotCleanPhotos: MulterFile[]
    tvPhotos: MulterFile[]
    windowPhotos: MulterFile[]
    sideTableNotCleanPhotos: MulterFile[]
    tvStandNotCleanPhotos: MulterFile[]
    cabinetTopAndInsideSurfacesNotCleanPhotos: MulterFile[]
    windowSillNotCleanPhotos: MulterFile[]
    BrochuresNotNeatlyAndSortedInTheirPlacePhotos: MulterFile[]
    DamageReportPhotos: MulterFile[]
}