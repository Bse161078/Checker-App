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
  import ValidationException from './validation.exception';
  
  @Catch(ValidationException)
  export default class ValidationFilter implements ExceptionFilter {
    catch(exception: ValidationException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const res: Response = ctx.getResponse<Response>();
      let statusCode: HttpStatus;
      let errorMessage: ErrorType;
      let invalidParams: ErrorType;
      if (exception instanceof HttpException) {
        statusCode = exception.getStatus();
        errorMessage = exception.message;
        const errors = {}
        exception.validationErrors.forEach(err => {
          const keys = Object.keys(err)
          errors[keys[0]] = err[keys[0]][0]
        })
        invalidParams = errors
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
  