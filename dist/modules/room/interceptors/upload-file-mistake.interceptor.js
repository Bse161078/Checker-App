"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MistakeFileInterceptor = void 0;
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const multer_2 = require("../../../common/utils/multer");
class MistakeFileInterceptor extends (0, platform_express_1.FileFieldsInterceptor)([
    { name: "roomIsNotVacuumedPhotos", maxCount: 1 },
    { name: "roomHasStrongStainsThatCanNotBeCleanedByUsPhotos", maxCount: 5 },
    { name: "damageCausedByGuestsPhotos", maxCount: 5 },
    { name: "reportPhotos", maxCount: 5 }
], {
    storage: (0, multer_1.diskStorage)({
        destination: multer_2.destinationImageFile,
        filename: multer_2.editFileName
    }),
    fileFilter: multer_2.imageFileFilter
}) {
}
exports.MistakeFileInterceptor = MistakeFileInterceptor;
//# sourceMappingURL=upload-file-mistake.interceptor.js.map