import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { MongoError, MongoServerError } from 'mongodb';
export declare class MongoExceptionFilter implements ExceptionFilter {
    catch(exception: MongoError & MongoServerError, host: ArgumentsHost): Response<any, Record<string, any>>;
}
