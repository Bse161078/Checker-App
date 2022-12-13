"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BathRoomFileUpload = void 0;
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const multer_2 = require("../../../common/utils/multer");
class BathRoomFileUpload extends (0, platform_express_1.FileFieldsInterceptor)([
    { name: "samplePhotoTopQuestion", maxCount: 1 },
    { name: "tilesAreNotMoppedPhotos", maxCount: 5 },
    { name: "toiletIsNotWipedPhotos", maxCount: 5 },
    { name: "thereIsDirtInTheShowePhotos", maxCount: 5 },
    { name: "shelvesAreNotWipedPhotos", maxCount: 5 },
    { name: "traysAreNotFilledPhotos", maxCount: 5 },
    { name: "DamageReportPhotos", maxCount: 5 },
], {
    storage: (0, multer_1.diskStorage)({
        destination: multer_2.destinationImageFile,
        filename: multer_2.editFileName
    }),
    fileFilter: multer_2.imageFileFilter
}) {
}
exports.BathRoomFileUpload = BathRoomFileUpload;
//# sourceMappingURL=upload-file-bethroom.interceptor.js.map