import { Request } from "express";
import { MulterFile } from "../types/public";
export declare const destinationImageFile: (req: Request, file: MulterFile, callback: (error: Error | null, fileDestination: string | null) => void) => void;
export declare const imageFileFilter: (req: Request, file: MulterFile, callback: (error: Error | null, acceptFile: boolean) => void) => void;
export declare const editFileName: (req: Request, file: Express.Multer.File, callback: any) => void;
