"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STRATEGY_NAMES = exports.LoggetTitles = exports.MetaDataTitles = exports.SwaggerConfigData = exports.CORSHeadersValues = exports.CORSHeadersTitles = exports.SendOTPRateLimiter = exports.AuthSchemeName = exports.CombineDecoratorsKey = exports.SwaggerConsumes = exports.ControllerNames = exports.APITagValues = exports.ResponseMessages = exports.NodeEnvironments = void 0;
var NodeEnvironments;
(function (NodeEnvironments) {
    NodeEnvironments["DEVELOPMENT"] = "development";
    NodeEnvironments["PRODUCTION"] = "production";
})(NodeEnvironments = exports.NodeEnvironments || (exports.NodeEnvironments = {}));
var ResponseMessages;
(function (ResponseMessages) {
    ResponseMessages["INTERNAL_SERVER_ERROR"] = "InternalServerError";
    ResponseMessages["NOT_FOUND"] = "NotFound";
    ResponseMessages["VALIDATION_ERROR"] = "ValidationError";
    ResponseMessages["UNAUTHORIZED"] = "Unauthorized";
    ResponseMessages["BAD_REQUEST"] = "BadRequest";
    ResponseMessages["SUCCESSFULLY_CREATED"] = "SuccessfullyCreated";
    ResponseMessages["FAKE_ERROR_MESSAGE"] = "fake-error-message";
    ResponseMessages["TOO_MANY_REQUESTS"] = "Too many requests, please try again later.";
    ResponseMessages["SOMETHING_WENT_WRONG"] = "Something went wrong!";
    ResponseMessages["SOCKET_AUTH_ERROR"] = "InvalidToken";
})(ResponseMessages = exports.ResponseMessages || (exports.ResponseMessages = {}));
var APITagValues;
(function (APITagValues) {
    APITagValues["USER_ACTIONS"] = "User Actions";
    APITagValues["AUTH_ACTIONS"] = "Auth Actions";
    APITagValues["DEVELOPER_ROUTES"] = "Developer Routes";
    APITagValues["SIMCARD"] = "Simcard";
})(APITagValues = exports.APITagValues || (exports.APITagValues = {}));
var ControllerNames;
(function (ControllerNames) {
    ControllerNames["USER"] = "user";
    ControllerNames["AUTH"] = "auth";
    ControllerNames["BROKER"] = "broker";
    ControllerNames["ADMIN"] = "admin";
    ControllerNames["UPLOAD_CSV"] = "upload-csv";
})(ControllerNames = exports.ControllerNames || (exports.ControllerNames = {}));
var SwaggerConsumes;
(function (SwaggerConsumes) {
    SwaggerConsumes["URL_ENCODED"] = "application/x-www-form-urlencoded";
    SwaggerConsumes["JSON"] = "application/json";
    SwaggerConsumes["MULTIPART"] = "multipart/form-data";
})(SwaggerConsumes = exports.SwaggerConsumes || (exports.SwaggerConsumes = {}));
var CombineDecoratorsKey;
(function (CombineDecoratorsKey) {
    CombineDecoratorsKey["GET_USER_PROFILE_OK"] = "GET_USER_PROFILE_OK";
    CombineDecoratorsKey["FORM"] = "FORM";
    CombineDecoratorsKey["GET_NEW_NUMBER_OK"] = "GET_NEW_NUMBER_OK";
    CombineDecoratorsKey["CHECK_NUMBER_STATUS"] = "CHECK_NUMBER_STATUS";
})(CombineDecoratorsKey = exports.CombineDecoratorsKey || (exports.CombineDecoratorsKey = {}));
var AuthSchemeName;
(function (AuthSchemeName) {
    AuthSchemeName["Authorization"] = "Authorization";
})(AuthSchemeName = exports.AuthSchemeName || (exports.AuthSchemeName = {}));
var SendOTPRateLimiter;
(function (SendOTPRateLimiter) {
    SendOTPRateLimiter["KEY_PREFIX"] = "send-otp";
    SendOTPRateLimiter["POINTS"] = "1";
    SendOTPRateLimiter["DURATION"] = "60";
})(SendOTPRateLimiter = exports.SendOTPRateLimiter || (exports.SendOTPRateLimiter = {}));
var CORSHeadersTitles;
(function (CORSHeadersTitles) {
    CORSHeadersTitles["ACCESS_CONTROL_ALLOW_ORIGIN"] = "Access-Control-Allow-Origin";
    CORSHeadersTitles["ACCESS_CONTROL_ALLOW_METHODS"] = "Access-Control-Allow-Methods";
    CORSHeadersTitles["ACCESS_CONTROL_ALLOW_HEADERS"] = "Access-Control-Allow-Headers";
})(CORSHeadersTitles = exports.CORSHeadersTitles || (exports.CORSHeadersTitles = {}));
var CORSHeadersValues;
(function (CORSHeadersValues) {
    CORSHeadersValues["ACCESS_CONTROL_ALLOW_ORIGIN"] = "*";
    CORSHeadersValues["ACCESS_CONTROL_ALLOW_METHODS"] = "GET,PUT,POST,DELETE";
    CORSHeadersValues["ACCESS_CONTROL_ALLOW_HEADERS"] = "Content-Type, Accept";
    CORSHeadersValues["ACCESS_CONTROL_ALLOW_CERTIFICAL"] = "true";
})(CORSHeadersValues = exports.CORSHeadersValues || (exports.CORSHeadersValues = {}));
var SwaggerConfigData;
(function (SwaggerConfigData) {
    SwaggerConfigData["TITLE"] = "Bullsfin backend API documentation";
    SwaggerConfigData["DESCRIPTION"] = "list of all routes and APIs with theme descriptions ";
    SwaggerConfigData["BEARER_TYPE"] = "http";
    SwaggerConfigData["BEARER_SCHEME"] = "Bearer";
    SwaggerConfigData["BEARER_FORMAT"] = "JWT";
    SwaggerConfigData["BEARER_PLACE"] = "header";
    SwaggerConfigData["VERSION"] = "v1";
    SwaggerConfigData["TAG"] = "Bullsfin";
})(SwaggerConfigData = exports.SwaggerConfigData || (exports.SwaggerConfigData = {}));
var MetaDataTitles;
(function (MetaDataTitles) {
    MetaDataTitles["PERMISSIONS"] = "permissions";
})(MetaDataTitles = exports.MetaDataTitles || (exports.MetaDataTitles = {}));
var LoggetTitles;
(function (LoggetTitles) {
    LoggetTitles["SIMCARD_GATEWAY"] = "SimcardGateway";
})(LoggetTitles = exports.LoggetTitles || (exports.LoggetTitles = {}));
var STRATEGY_NAMES;
(function (STRATEGY_NAMES) {
    STRATEGY_NAMES["LOCAL"] = "local";
    STRATEGY_NAMES["OAUTH"] = "oauth";
    STRATEGY_NAMES["JWT"] = "jwt";
})(STRATEGY_NAMES = exports.STRATEGY_NAMES || (exports.STRATEGY_NAMES = {}));
//# sourceMappingURL=index.js.map