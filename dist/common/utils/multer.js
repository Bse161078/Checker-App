"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editFileName = exports.imageFileFilter = exports.destinationImageFile = void 0;
const path = require("path");
const destinationImageFile = (req, file, callback) => {
    return callback(null, path.join("public", "upload", "images"));
};
exports.destinationImageFile = destinationImageFile;
const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
        callback(new Error('Only image files are allowed!'), false);
    }
    else
        callback(null, true);
};
exports.imageFileFilter = imageFileFilter;
const editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = path.extname(file.originalname);
    callback(null, `${Date.now()}${fileExtName}`);
};
exports.editFileName = editFileName;
//# sourceMappingURL=multer.js.map