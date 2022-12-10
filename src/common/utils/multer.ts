import { BadRequestException } from "@nestjs/common";
import { Request } from "express";
import * as path from "path";

export const destinationImageFile = (req: Request, file, callback) => {
        return callback(null, path.join("public", "upload", "images"));
};
export const imageFileFilter = (req: Request, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
        callback(new BadRequestException('Only image files are allowed!'), false)
    }
    callback(null, true);
};

export const editFileName = (req: Request, file: Express.Multer.File, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = path.extname(file.originalname);
    callback(null, `${Date.now()}${fileExtName}`);
};