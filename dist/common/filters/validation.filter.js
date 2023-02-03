"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const enums_1 = require("../..//common/enums");
const validation_exception_1 = require("./validation.exception");
let ValidationFilter = class ValidationFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse();
        let statusCode;
        let errorMessage;
        let invalidParams;
        if (exception instanceof common_1.HttpException) {
            statusCode = exception.getStatus();
            errorMessage = exception.message;
            const errors = {};
            exception.validationErrors.forEach(err => {
                const keys = Object.keys(err);
                errors[keys[0]] = err[keys[0]][0];
            });
            invalidParams = errors;
        }
        else {
            statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            errorMessage = enums_1.ResponseMessages.INTERNAL_SERVER_ERROR;
            invalidParams = {};
        }
        const errorResponse = {
            statusCode,
            errors: {
                message: errorMessage,
                invalidParams,
            },
        };
        return res.status(errorResponse.statusCode).json(errorResponse);
    }
};
ValidationFilter = __decorate([
    (0, common_1.Catch)(validation_exception_1.default)
], ValidationFilter);
exports.default = ValidationFilter;
//# sourceMappingURL=validation.filter.js.map