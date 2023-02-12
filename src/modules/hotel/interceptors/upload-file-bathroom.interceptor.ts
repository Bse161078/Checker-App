import { FileFieldsInterceptor } from "@nestjs/platform-express";
import {diskStorage} from "multer"
import { destinationImageFile, editFileName, imageFileFilter } from "src/common/utils/multer";

export class HotelLogoUpload extends FileFieldsInterceptor(
    [
        {name: "logo", maxCount: 1},
    ],
    {
        storage: diskStorage( {
            destination: destinationImageFile,
            filename: editFileName
        }),
        fileFilter: imageFileFilter
    }
) { }


export class AvatarUpload extends FileFieldsInterceptor(
    [
        {name: "avatar", maxCount: 1},
    ],
    {
        storage: diskStorage( {
            destination: destinationImageFile,
            filename: editFileName
        }),
        fileFilter: imageFileFilter
    }
) { }