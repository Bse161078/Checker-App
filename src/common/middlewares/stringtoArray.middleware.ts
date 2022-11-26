import { NestMiddleware } from "@nestjs/common";
import { isArray, isMongoId, isString } from "class-validator";
import { NextFunction, Request, Response } from "express";
import {Types} from "mongoose"
export default function StringToArray(field: string, type?: string) {
    return class Middleware implements NestMiddleware {
        use(req: Request, res: Response, next: NextFunction) {
            const myField = req.body[field];
            if(isArray(myField)) return next()
            if(isString(myField) && type == "mongoId") {
                req.body[field] = [...new Set(myField.split(",").filter(isMongoId))]
            }else if(isString(myField)) {
                req.body[field] = myField.split(",");
            }else {
                req.body[field] = []
            }
            console.log(req.body[field]);
            
            return next()
        }
    }
}