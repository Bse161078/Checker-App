import { BadRequestException } from "@nestjs/common";
import { Request } from "express";
import * as path from "path";

export const destinationImageFile = (req: Request, file, callback) => {
        return callback(null, path.join("public", "upload", "images"));
};
export const destinationExcelFile = (req: Request, file, callback) => {
        return callback(null, path.join("public", "upload", "excels"));
};
export const imageFileFilter = (req: Request, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        callback(new BadRequestException('Only image files are allowed!'), false)
    }
    callback(null, true);
};
export const excelFileFilter = (req: Request, file, callback) => {
    if (!file.originalname.match(/\.(csv||xls|xlsx)$/)) {
        callback(new BadRequestException('Only excel files are allowed!'), false)
    }
    callback(null, true);
};

export const editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = path.extname(file.originalname);
    callback(null, `${Date.now()}${fileExtName}`);
};