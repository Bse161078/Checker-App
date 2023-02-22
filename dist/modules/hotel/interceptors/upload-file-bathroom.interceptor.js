"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarUpload = exports.HotelLogoUpload = void 0;
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const multer_2 = require("../../../common/utils/multer");
class HotelLogoUpload extends (0, platform_express_1.FileFieldsInterceptor)([
    { name: "logo", maxCount: 1 },
], {
    storage: (0, multer_1.diskStorage)({
        destination: multer_2.destinationImageFile,
        filename: multer_2.editFileName
    }),
    fileFilter: multer_2.imageFileFilter
}) {
}
exports.HotelLogoUpload = HotelLogoUpload;
class AvatarUpload extends (0, platform_express_1.FileFieldsInterceptor)([
    { name: "avatar", maxCount: 1 },
], {
    storage: (0, multer_1.diskStorage)({
        destination: multer_2.destinationImageFile,
        filename: multer_2.editFileName
    }),
    fileFilter: multer_2.imageFileFilter
}) {
}
exports.AvatarUpload = AvatarUpload;
//# sourceMappingURL=upload-file-bathroom.interceptor.js.map