"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConfig = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
function jwtConfig() {
    return {
        secret: process.env.ACCESS_TOKEN_SECRET,
        signOptions: {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
        },
    };
}
exports.jwtConfig = jwtConfig;
//# sourceMappingURL=jwt.config.js.map