"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShelvesFileUpload = void 0;
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const multer_2 = require("../../../common/utils/multer");
class ShelvesFileUpload extends (0, platform_express_1.FileFieldsInterceptor)([
    { name: "samplePhotoTopQuestion", maxCount: 1 },
    { name: "tableNotCleanPhotos", maxCount: 5 },
    { name: "sideTableNotCleanPhotos", maxCount: 5 },
    { name: "tvStandNotCleanPhotos", maxCount: 5 },
    { name: "cabinetTopAndInsideSurfacesNotCleanPhotos", maxCount: 5 },
    { name: "windowSillNotCleanPhotos", maxCount: 5 },
    { name: "BrochuresNotNeatlyAndSortedInTheirPlacePhotos", maxCount: 5 },
    { name: "DamageReportPhotos", maxCount: 5 },
], {
    storage: (0, multer_1.diskStorage)({
        destination: multer_2.destinationImageFile,
        filename: multer_2.editFileName
    }),
    fileFilter: multer_2.imageFileFilter
}) {
}
exports.ShelvesFileUpload = ShelvesFileUpload;
//# sourceMappingURL=upload-file-shelves.interceptor.js.map