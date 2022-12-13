"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAccessToken = exports.getTokenFromRequestAsBearer = exports.extractTokenAsBearer = exports.accessTokenGenrator = exports.comparePassword = exports.hashPassword = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = require("dotenv");
const common_1 = require("@nestjs/common");
const enums_1 = require("../enums");
const class_validator_1 = require("class-validator");
(0, dotenv_1.config)();
function hashPassword(data) {
    const salt = (0, bcrypt_1.genSaltSync)(10);
    return (0, bcrypt_1.hashSync)(data, salt);
}
exports.hashPassword = hashPassword;
function comparePassword(data, password) {
    return (0, bcrypt_1.compareSync)(data, password);
}
exports.comparePassword = comparePassword;
function accessTokenGenrator(payload) {
    const { ACCESS_TOKEN_EXPIRES_IN } = process.env;
    return (0, jsonwebtoken_1.sign)(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRES_IN });
}
exports.accessTokenGenrator = accessTokenGenrator;
function extractTokenAsBearer(bearerToken) {
    const [bearer, token] = (bearerToken === null || bearerToken === void 0 ? void 0 : bearerToken.split(' ')) || [undefined, undefined];
    if (!token || !bearer)
        throw new common_1.UnauthorizedException();
    if ((bearer === null || bearer === void 0 ? void 0 : bearer.toLowerCase()) !== 'bearer')
        throw new common_1.UnauthorizedException();
    return token;
}
exports.extractTokenAsBearer = extractTokenAsBearer;
function getTokenFromRequestAsBearer(req) {
    var _a;
    const token = (_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization;
    return extractTokenAsBearer(token);
}
exports.getTokenFromRequestAsBearer = getTokenFromRequestAsBearer;
function verifyAccessToken(token) {
    const verifyResult = (0, jsonwebtoken_1.verify)(token, process.env.ACCESS_TOKEN_SECRET);
    if ((0, class_validator_1.isObject)(verifyResult) && verifyResult.email)
        return verifyResult;
    throw new common_1.BadRequestException(verifyResult !== null && verifyResult !== void 0 ? verifyResult : enums_1.ResponseMessages.SOMETHING_WENT_WRONG);
}
exports.verifyAccessToken = verifyAccessToken;
//# sourceMappingURL=auth.js.map