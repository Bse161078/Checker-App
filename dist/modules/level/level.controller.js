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
exports.LevelController = void 0;
const common_1 = require("@nestjs/common");
const level_service_1 = require("./level.service");
const create_level_dto_1 = require("./dto/create-level.dto");
const update_level_dto_1 = require("./dto/update-level.dto");
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../common/enums");
const role_enum_1 = require("../../common/enums/role.enum");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const user_decorator_1 = require("../../common/decorators/user.decorator");
const auth_decorator_1 = require("../../common/decorators/auth.decorator");
const level_dto_1 = require("./dto/level.dto");
let LevelController = class LevelController {
    constructor(levelService) {
        this.levelService = levelService;
    }
    async create(createLevelDto, user) {
        const result = await this.levelService.create(createLevelDto, user._id);
        return result;
    }
    async findAll() {
        const levels = await this.levelService.findAll();
        return { levels };
    }
    async findOne(levelIdDto) {
        const level = await this.levelService.findOne(levelIdDto.levelID);
        return { level };
    }
    async update(levelIdDto, updateLevelDto) {
        const result = await this.levelService.update(levelIdDto.levelID, updateLevelDto);
        return { message: "update level successfully" };
    }
    async remove(levelIdDto) {
        const result = await this.levelService.remove(levelIdDto.levelID);
        return {
            statusCode: common_1.HttpStatus.OK,
            data: {
                message: "deleted level successfully"
            }
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)(enums_1.SwaggerConsumes.URL_ENCODED, enums_1.SwaggerConsumes.JSON),
    (0, swagger_1.ApiOperation)({ summary: "hotel role access" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_level_dto_1.CreateLevelDto, Object]),
    __metadata("design:returntype", Promise)
], LevelController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, role_decorator_1.Roles)(),
    (0, swagger_1.ApiOperation)({ summary: "hotel role access" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LevelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':levelID'),
    (0, role_decorator_1.Roles)(),
    (0, swagger_1.ApiParam)({ name: "levelID", type: "string" }),
    (0, swagger_1.ApiOperation)({ summary: "hotel role access" }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [level_dto_1.LevelIdDto]),
    __metadata("design:returntype", Promise)
], LevelController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':levelID'),
    (0, swagger_1.ApiParam)({ name: "id", type: "string" }),
    (0, swagger_1.ApiConsumes)("application/x-www-form-urlencoded", "application/json"),
    (0, swagger_1.ApiOperation)({ summary: "hotel role access" }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [level_dto_1.LevelIdDto, update_level_dto_1.UpdateLevelDto]),
    __metadata("design:returntype", Promise)
], LevelController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':levelID'),
    (0, swagger_1.ApiParam)({ name: "id", type: "string" }),
    (0, swagger_1.ApiOperation)({ summary: "hotel role access" }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [level_dto_1.LevelIdDto]),
    __metadata("design:returntype", Promise)
], LevelController.prototype, "remove", null);
LevelController = __decorate([
    (0, common_1.Controller)('level'),
    (0, swagger_1.ApiTags)("admin - Level"),
    (0, auth_decorator_1.AuthDecorator)(role_enum_1.ROLES.HOTELADMIN),
    __metadata("design:paramtypes", [level_service_1.LevelService])
], LevelController);
exports.LevelController = LevelController;
//# sourceMappingURL=level.controller.js.map