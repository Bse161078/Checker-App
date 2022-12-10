import { CallHandler, ExecutionContext, HttpStatus, NestInterceptor } from "@nestjs/common";
import { Response } from "express";
import { map, Observable } from "rxjs";

export class ResponseInterceptor implements NestInterceptor  {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const statusCode = context.switchToHttp().getResponse<Response>().statusCode;
        return next.handle().pipe(
            map(data => {
                return {
                    statusCode: statusCode ?? HttpStatus.OK,
                    data,
                }
            })
        )
    }
    
}