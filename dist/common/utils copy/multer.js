"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editFileName = exports.excelFileFilter = exports.imageFileFilter = exports.destinationExcelFile = exports.destinationImageFile = void 0;
const common_1 = require("@nestjs/common");
const path = require("path");
const destinationImageFile = (req, file, callback) => {
    return callback(null, path.join("public", "upload", "images"));
};
exports.destinationImageFile = destinationImageFile;
const destinationExcelFile = (req, file, callback) => {
    return callback(null, path.join("public", "upload", "excels"));
};
exports.destinationExcelFile = destinationExcelFile;
const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        callback(new common_1.BadRequestException('Only image files are allowed!'), false);
    }
    callback(null, true);
};
exports.imageFileFilter = imageFileFilter;
const excelFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(csv||xls|xlsx)$/)) {
        callback(new common_1.BadRequestException('Only excel files are allowed!'), false);
    }
    callback(null, true);
};
exports.excelFileFilter = excelFileFilter;
const editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = path.extname(file.originalname);
    callback(null, `${Date.now()}${fileExtName}`);
};
exports.editFileName = editFileName;
//# sourceMappingURL=multer.js.map