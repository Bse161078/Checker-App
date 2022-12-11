import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { destinationImageFile, editFileName, imageFileFilter } from "../utils/multer";

export function UploadImageInterceptor(fieldName: string){
    return class UploadUtility extends FileInterceptor(fieldName, {
        storage: diskStorage({
            destination: destinationImageFile,
            filename: editFileName,
        }),
        fileFilter: imageFileFilter
    }){}
}