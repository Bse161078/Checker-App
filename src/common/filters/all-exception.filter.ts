import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ResponseMessages } from 'src/common/enums';
import { ErrorResponse, ErrorType } from 'src/common/types/public';

@Catch(HttpException)
export default class AllExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const res: Response = ctx.getResponse<Response>();
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
