"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const swagger_enum_1 = require("../../common/enums/swagger.enum");
const auth_service_1 = require("./services/auth.service");
const login_dto_1 = require("./dto/login.dto");
const register_dto_ts_1 = require("./dto/register.dto.ts");
const auth_decorator_1 = require("../../common/decorators/auth.decorator");
const user_decorator_1 = require("../../common/decorators/user.decorator");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(body) {
        const loginResult = await this.authService.login(body);
        return { loginResult };
    }
    async register(body) {
        const registerResult = await this.authService.register(body);
        return { registerResult };
    }
    async checkLogin(user) {
        return { user };
    }
};
__decorate([
    (0, common_1.Post)("/login"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiConsumes)(swagger_enum_1.ContentType.URL_ENCODED, swagger_enum_1.ContentType.JSON),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)("/register"),
    (0, swagger_1.ApiConsumes)(swagger_enum_1.ContentType.URL_ENCODED, swagger_enum_1.ContentType.JSON),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_ts_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Get)("/check-login"),
    (0, swagger_1.ApiConsumes)(swagger_enum_1.ContentType.URL_ENCODED, swagger_enum_1.ContentType.JSON),
    (0, auth_decorator_1.AuthDecorator)(),
    __param(0, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "checkLogin", null);
AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    (0, swagger_1.ApiTags)("Authentication"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map