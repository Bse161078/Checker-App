import { FileFieldsInterceptor } from "@nestjs/platform-express";
import {diskStorage} from "multer"
import { destinationImageFile, editFileName, imageFileFilter } from "src/common/utils/multer";

export class ShelvesFileUpload extends FileFieldsInterceptor(
    [
        {name: "samplePhotoTopQuestion", maxCount: 1},
        {name: "wipedPhotos", maxCount: 5},
        {name: "tvPhotos", maxCount: 5},
        {name: "windowPhotos", maxCount: 5},
        {name: "tableNotCleanPhotos", maxCount: 5},
        {name: "sideTableNotCleanPhotos", maxCount: 5},
        {name: "tvStandNotCleanPhotos", maxCount: 5},
        {name: "cabinetTopAndInsideSurfacesNotCleanPhotos", maxCount: 5},
        {name: "windowSillNotCleanPhotos", maxCount: 5},
        {name: "BrochuresNotNeatlyAndSortedInTheirPlacePhotos", maxCount: 5},
        {name: "DamageReportPhotos", maxCount: 5},
    ],
    {
        storage: diskStorage( {
            destination: destinationImageFile,
            filename: editFileName
        }),
        fileFilter: imageFileFilter
    }
) { }