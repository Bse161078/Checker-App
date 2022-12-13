"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const fs_1 = require("fs");
const path_1 = require("path");
const enums_1 = require("../enums");
let AllExceptionFilter = class AllExceptionFilter {
    catch(exception, host) {
        var _a;
        const ctx = host.switchToHttp();
        const res = ctx.getResponse();
        const req = ctx.getRequest();
        if (req.file) {
            (0, fs_1.unlinkSync)((0, path_1.join)(process.cwd(), req.file.path));
        }
        if (((_a = req === null || req === void 0 ? void 0 : req.files) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            for (const field in req.files) {
                if ((0, class_validator_1.isArray)(req.files[field])) {
                    for (const file of req.files[field]) {
                        if ((0, fs_1.existsSync)((0, path_1.join)(process.cwd(), file === null || file === void 0 ? void 0 : file.path))) {
                            (0, fs_1.unlinkSync)((0, path_1.join)(process.cwd(), file.path));
                        }
                    }
                }
                if ((0, class_validator_1.isObject)(req.files[field])) {
                    const file = req.files[field];
                    if ((0, fs_1.existsSync)((0, path_1.join)(process.cwd(), file === null || file === void 0 ? void 0 : file.path))) {
                        (0, fs_1.unlinkSync)((0, path_1.join)(process.cwd(), file.path));
                    }
                }
            }
        }
        let statusCode;
        let errorMessage;
        let invalidParams;
        if (exception instanceof common_1.HttpException) {
            statusCode = exception.getStatus();
            errorMessage = exception.message;
            invalidParams = {};
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
AllExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], AllExceptionFilter);
exports.default = AllExceptionFilter;
//# sourceMappingURL=all-exception.filter.js.map