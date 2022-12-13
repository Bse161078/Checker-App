import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { isArray, isObject } from 'class-validator';
import { Request, Response } from 'express';
import { existsSync, unlinkSync } from 'fs';
import { join } from 'path';
import { ResponseMessages } from 'src/common/enums';
import { ErrorResponse, ErrorType } from 'src/common/types/public';

@Catch(HttpException)
export default class AllExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const res: Response = ctx.getResponse<Response>();
        const req: Request = ctx.getRequest<Request>();
        if (req.file) {
            unlinkSync(join(process.cwd(), req.file.path))
        }
        if (req?.files?.length > 0) {
            for (const field in req.files) {
                if (isArray(req.files[field])) {
                    for (const file of req.files[field]) {
                        if (existsSync(join(process.cwd(), file?.path))) {
                            unlinkSync(join(process.cwd(), file.path))
                        }
                    }
                }
                if (isObject(req.files[field])) {
                    const file = req.files[field]
                    if (existsSync(join(process.cwd(), file?.path))) {
                        unlinkSync(join(process.cwd(), file.path))
                    }
                }
            }
        }
        let statusCode: HttpStatus;
        let errorMessage: ErrorType;
        let invalidParams: ErrorType;
        if (exception instanceof HttpException) {
            statusCode = exception.getStatus();
            errorMessage = exception.message;
            invalidParams = {};
        } else {
            statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
            errorMessage = ResponseMessages.INTERNAL_SERVER_ERROR;
            invalidParams = {};
        }
        const errorResponse: ErrorResponse = {
            statusCode,
            errors: {
                message: errorMessage,
                invalidParams,
            },
        };
        return res.status(errorResponse.statusCode).json(errorResponse);
    }
}
