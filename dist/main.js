"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const all_exception_filter_1 = require("./common/filters/all-exception.filter");
const mongo_exception_1 = require("./common/filters/mongo.exception");
const validation_filter_1 = require("./common/filters/validation.filter");
const response_interceptor_1 = require("./common/interceptors/response.interceptor");
const swagger_config_1 = require("./config/swagger.config");
const app_module_1 = require("./modules/app/app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const publicPath = (0, path_1.join)(__dirname, "../public");
    app.useGlobalFilters(new all_exception_filter_1.default(), new mongo_exception_1.MongoExceptionFilter(), new validation_filter_1.default());
    app.enableCors();
    app.useStaticAssets(publicPath);
    app.useGlobalInterceptors(new response_interceptor_1.ResponseInterceptor());
    (0, swagger_config_1.default)(app);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map