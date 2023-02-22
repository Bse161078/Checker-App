import {NestFactory} from '@nestjs/core';
import {NestExpressApplication} from '@nestjs/platform-express';
import {join} from 'path';
import AllExceptionFilter from './common/filters/all-exception.filter';
import {MongoExceptionFilter} from './common/filters/mongo.exception';
import ValidationFilter from './common/filters/validation.filter';
import {ResponseInterceptor} from './common/interceptors/response.interceptor';
import SwaggerInit from './config/swagger.config';
import {AppModule} from './modules/app/app.module';
import { urlencoded, json } from 'express';
import {ValidationPipe} from '@nestjs/common';
const fs=require("fs");

async function bootstrap() {
    const httpsOptions = {
        key: fs.readFileSync('./keys/server.key'),
        cert: fs.readFileSync('./keys/server.crt'),
        ca: fs.readFileSync('./keys/server.ca-bundle'),

    };
    const app = await NestFactory.create<NestExpressApplication>(AppModule,{
        httpsOptions,
    });


    //const app = await NestFactory.create<NestExpressApplication>(AppModule);
    const publicPath = join(__dirname, "../public");
    app.useGlobalFilters(new AllExceptionFilter(), new MongoExceptionFilter(), new ValidationFilter());
    app.use(json({limit: '50mb'}));
    app.enableCors();
    app.useStaticAssets(publicPath);
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalInterceptors(new ResponseInterceptor());
    SwaggerInit(app);
    await app.listen(3002);
}

bootstrap();
