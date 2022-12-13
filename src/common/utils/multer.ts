import { BadRequestException } from "@nestjs/common";
import { Request } from "express";
import * as path from "path";
import { MulterCallback, MulterFile } from "../types/public";

export const destinationImageFile = (req: Request, file: MulterFile, callback: (error: Error | null, fileDestination: string | null) => void) => {
    return callback(null, path.join("public", "upload", "images"));
};
export const imageFileFilter = (req: Request, file: MulterFile, callback: (error: Error | null, acceptFile: boolean) => void) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
        callback(new Error('Only image files are allowed!'), false)
    } else callback(null, true);
};

export const editFileName = (req: Request, file: Express.Multer.File, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = path.extname(file.originalname);
    callback(null, `${Date.now()}${fileExtName}`);
};