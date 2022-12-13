"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
function SwaggerInit(app) {
    const config = new swagger_1.DocumentBuilder()
        .setTitle("The checker Application")
        .addTag("The Checker")
        .setVersion("v1")
        .addBearerAuth(SwaggerBearerConfig())
        .setDescription("api for admin and application of theChecker ")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("/", app, document);
}
exports.default = SwaggerInit;
function SwaggerBearerConfig() {
    return {
        type: "http",
        scheme: "Bearer",
        bearerFormat: "JWT",
        in: "header"
    };
}
//# sourceMappingURL=swagger.config.js.map