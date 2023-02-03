"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const enums_1 = require("../common/enums");
(0, dotenv_1.config)();
function dbConfig() {
    const { NODE_ENV, DB_HOST, DB_PASSWORD, DB_NAME, DB_USERNAME, DB_PORT, DB_OPTION } = process.env;
    const connection = NODE_ENV === enums_1.NodeEnvironments.PRODUCTION ?
        `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?${DB_OPTION}` :
        `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
    console.log(connection);
    return connection;
}
exports.default = dbConfig;
//# sourceMappingURL=mongoose.config.js.map