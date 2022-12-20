import { FileFieldsInterceptor } from "@nestjs/platform-express";
import {diskStorage} from "multer"
import { destinationImageFile, editFileName, imageFileFilter } from "src/common/utils/multer";

export class BedFileUpload extends FileFieldsInterceptor(
    [
        {name: "samplePhotoTopQuestion", maxCount: 1},
        {name: "bedDoesNotLookFreshPhotos", maxCount: 5},
        {name: "bedSheetInNotProperlyTightenedPhotos", maxCount: 5},
        {name: "extraBedPhotos", maxCount: 5},
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