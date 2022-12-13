"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadedFileDecorator = void 0;
const common_1 = require("@nestjs/common");
function UploadedFileDecorator(fileType, size = 10) {
    return (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: size * 1024 * 1024 }),
            new common_1.FileTypeValidator({ fileType })
        ]
    }));
}
exports.UploadedFileDecorator = UploadedFileDecorator;
//# sourceMappingURL=upload.decorators.js.map