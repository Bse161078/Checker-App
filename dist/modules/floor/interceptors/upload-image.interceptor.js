"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloorFileUpload = void 0;
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const multer_2 = require("../../../common/utils/multer");
class FloorFileUpload extends (0, platform_express_1.FileFieldsInterceptor)([
    { name: "samplePhotoTopQuestion", maxCount: 1 },
    { name: "roomIsNotVacuumedPhotos", maxCount: 5 },
    { name: "roomHasStrongStainsThatCanNotBeCleanedByUsPhotos", maxCount: 5 },
    { name: "DamageCausedByGuestsPhotos", maxCount: 5 },
    { name: "DamageReportPhotos", maxCount: 5 },
], {
    storage: (0, multer_1.diskStorage)({
        destination: multer_2.destinationImageFile,
        filename: multer_2.editFileName
    }),
    fileFilter: multer_2.imageFileFilter
}) {
}
exports.FloorFileUpload = FloorFileUpload;
//# sourceMappingURL=upload-image.interceptor.js.map