import { INestApplication } from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger"
import { SecuritySchemeObject } from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";
export default function SwaggerInit(app: INestApplication) {
    const config = new DocumentBuilder()
    .setTitle("The checker Application")
    .addTag("The Checker")
    .setVersion("v1")
    .addBearerAuth(SwaggerBearerConfig())
    .setDescription("api for admin and application of theChecker ")
    .addServer("http://localhost:3000", "localhost server")
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/", app, document);
}
function SwaggerBearerConfig(): SecuritySchemeObject{
    return {
        type: "http",
        scheme: "Bearer",
        bearerFormat: "JWT",
        in: "header"
    }
}