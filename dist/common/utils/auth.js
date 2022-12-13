"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenFromRequestAsBearer = exports.extractTokenAsBearer = void 0;
const dotenv_1 = require("dotenv");
const common_1 = require("@nestjs/common");
(0, dotenv_1.config)();
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
//# sourceMappingURL=auth.js.map