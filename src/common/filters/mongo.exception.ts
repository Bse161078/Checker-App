import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { MongoError, MongoServerError } from 'mongodb';
import { ResponseMessages } from '../enums';
import { ErrorResponse, ErrorType } from '../types/public';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError & MongoServerError, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const res: Response = ctx.getResponse<Response>()
    let errorMessage: string = ResponseMessages.INTERNAL_SERVER_ERROR;
    let statusCode: number = HttpStatus.INTERNAL_SERVER_ERROR;
    let invalidParams: ErrorType
    if (exception.code == 11000) {
      errorMessage = "data already exists";
      statusCode = 400;
      invalidParams = exception.keyValue
    }
    const errorResponse: ErrorResponse = {
      statusCode,
      errors: {
        title: errorMessage,
        invalidParams,
      },
    };
    return res.status(statusCode).json(errorResponse)
  }
}