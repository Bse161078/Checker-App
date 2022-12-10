import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import AllExceptionFilter from './common/filters/all-exception.filter';
import { MongoExceptionFilter } from './common/filters/mongo.exception';
import ValidationFilter from './common/filters/validation.filter';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import SwaggerInit from './config/swagger.config';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalFilters(new AllExceptionFilter(), new MongoExceptionFilter(), new ValidationFilter())
  app.useGlobalInterceptors(new ResponseInterceptor())
  SwaggerInit(app)
  await app.listen(3000);
}
bootstrap();
