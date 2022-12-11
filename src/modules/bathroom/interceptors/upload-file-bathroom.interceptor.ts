import { FileFieldsInterceptor } from "@nestjs/platform-express";
import {diskStorage} from "multer"
import { destinationImageFile, editFileName, imageFileFilter } from "src/common/utils/multer";

export class BathRoomFileUpload extends FileFieldsInterceptor(
    [
        {name: "samplePhotoTopQuestion", maxCount: 1},
        {name: "tilesAreNotMoppedPhotos", maxCount: 5},
        {name: "toiletIsNotWipedPhotos", maxCount: 5},
        {name: "thereIsDirtInTheShowePhotos", maxCount: 5},
        {name: "shelvesAreNotWipedPhotos", maxCount: 5},
        {name: "traysAreNotFilledPhotos", maxCount: 5},
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