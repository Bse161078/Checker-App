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
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const auth_service_1 = require("../../modules/auth/services/auth.service");
const user_entity_1 = require("../../modules/user/entities/user.entity");
let CheckTokenInterceptor = class CheckTokenInterceptor {
    constructor(userRepository, authService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }
    async intercept(context, next) {
        const req = context.switchToHttp().getRequest();
        const token = this.authService.getTokenFromRequestAsBearer(req);
        const { sub } = await this.authService.verifyJwt(token);
        const user = await this.userRepository.findOne({ _id: new mongoose_2.Types.ObjectId(sub) });
        if (!user)
            throw new common_1.UnauthorizedException();
        if (user.accessToken !== token) {
            throw new common_1.UnauthorizedException("Login to your account again");
        }
        req.user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            role: user.role,
            accessToken: user.accessToken
        };
        return next.handle().pipe();
    }
};
CheckTokenInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        auth_service_1.AuthService])
], CheckTokenInterceptor);
exports.default = CheckTokenInterceptor;
//# sourceMappingURL=checkToken.interceptor.js.map