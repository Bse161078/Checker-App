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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const bcrypt_1 = require("bcrypt");
const mongoose_2 = require("mongoose");
const role_enum_1 = require("../../../common/enums/role.enum");
const user_entity_1 = require("../../user/entities/user.entity");
let AuthService = class AuthService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async login(loginDto) {
        var _a;
        const user = await this.userRepository.findOne({ username: loginDto.username });
        console.log(user);
        if (!user)
            throw new common_1.UnauthorizedException("username or password is incorrect");
        if (!this.comparePassword(loginDto.password, user.password)) {
            throw new common_1.UnauthorizedException("username or password is incorrect");
        }
        const payload = { sub: user._id.toString() };
        const accessToken = await this.signJwt(payload);
        user.accessToken = accessToken;
        user.role = (_a = user.role) !== null && _a !== void 0 ? _a : role_enum_1.ROLES.USER;
        await user.save();
        return {
            accessToken,
            role: user.role
        };
    }
    async register(registerDto) {
        if (await this.userRepository.count() == 0) {
            registerDto._id = new mongoose_2.Types.ObjectId('6394666596c86815d3ccef30');
        }
        const user = await this.userRepository.findOne({ username: registerDto.username });
        if (user)
            throw new common_1.UnauthorizedException("username already exist");
        registerDto.password = this.hashPassword(registerDto.password);
        const userDto = Object.assign(registerDto, { role: role_enum_1.ROLES.USER });
        return await this.userRepository.create(userDto);
    }
    async signJwt(payload) {
        const { ACCESS_TOKEN_EXPIRES_IN: expiresIn, ACCESS_TOKEN_SECRET: secret } = process.env;
        return this.jwtService.sign(payload, { expiresIn, secret });
    }
    async verifyJwt(token) {
        const { ACCESS_TOKEN_SECRET: secret } = process.env;
        return this.jwtService.verify(token, { secret });
    }
    hashPassword(data) {
        const salt = (0, bcrypt_1.genSaltSync)(10);
        return (0, bcrypt_1.hashSync)(data, salt);
    }
    comparePassword(data, password) {
        return (0, bcrypt_1.compareSync)(data, password);
    }
    extractTokenAsBearer(bearerToken) {
        const [bearer, token] = (bearerToken === null || bearerToken === void 0 ? void 0 : bearerToken.split(' ')) || [undefined, undefined];
        if (!token || !bearer)
            throw new common_1.UnauthorizedException();
        if ((bearer === null || bearer === void 0 ? void 0 : bearer.toLowerCase()) !== 'bearer')
            throw new common_1.UnauthorizedException();
        return token;
    }
    getTokenFromRequestAsBearer(req) {
        var _a;
        const token = (_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization;
        return this.extractTokenAsBearer(token);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map