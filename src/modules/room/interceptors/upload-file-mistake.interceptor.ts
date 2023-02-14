import { FileFieldsInterceptor } from "@nestjs/platform-express";
import {diskStorage} from "multer"
import { destinationImageFile, editFileName, imageFileFilter } from "src/common/utils/multer";

export class MistakeFileInterceptor extends FileFieldsInterceptor(
    [
        {name: "roomIsNotVacuumedPhotos", maxCount: 1},
        {name: "roomHasStrongStainsThatCanNotBeCleanedByUsPhotos", maxCount: 5},
        {name: "damageCausedByGuestsPhotos", maxCount: 5},
        {name: "reportPhotos", maxCount: 5}
    ],
    {
        storage: diskStorage( {
            destination: destinationImageFile,
            filename: editFileName
        }),
        fileFilter: imageFileFilter
    }
) { }