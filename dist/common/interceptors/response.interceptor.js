"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
class ResponseInterceptor {
    intercept(context, next) {
        const statusCode = context.switchToHttp().getResponse().statusCode;
        return next.handle().pipe((0, rxjs_1.map)(data => {
            return {
                statusCode: statusCode !== null && statusCode !== void 0 ? statusCode : common_1.HttpStatus.OK,
                data,
            };
        }));
    }
}
exports.ResponseInterceptor = ResponseInterceptor;
//# sourceMappingURL=response.interceptor.js.map