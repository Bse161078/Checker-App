"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadImageInterceptor = void 0;
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const multer_2 = require("../utils/multer");
function UploadImageInterceptor(fieldName) {
    return class UploadUtility extends (0, platform_express_1.FileInterceptor)(fieldName, {
        storage: (0, multer_1.diskStorage)({
            destination: multer_2.destinationImageFile,
            filename: multer_2.editFileName,
        }),
    }) {
    };
}
exports.UploadImageInterceptor = UploadImageInterceptor;
//# sourceMappingURL=file-upload.interceptor.js.map