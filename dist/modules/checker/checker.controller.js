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
exports.CheckerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_decorator_1 = require("../../common/decorators/auth.decorator");
const upload_decorators_1 = require("../../common/decorators/upload.decorators");
const enums_1 = require("../../common/enums");
const role_enum_1 = require("../../common/enums/role.enum");
const file_upload_interceptor_1 = require("../../common/interceptors/file-upload.interceptor");
const checker_service_1 = require("./checker.service");
const create_checker_dto_1 = require("./dto/create-checker.dto");
const update_checker_dto_1 = require("./dto/update-checker.dto");
let CheckerController = class CheckerController {
    constructor(checkerService) {
        this.checkerService = checkerService;
    }
    async create(avatar, createCheckerDto) {
        createCheckerDto.avatar = avatar.path.slice(7);
        const checker = await this.checkerService.create(createCheckerDto);
        return { checker };
    }
    async findAll() {
        const checkers = await this.checkerService.findAll();
        return { checkers };
    }
    findOne(id) {
        const checker = this.checkerService.findOne(id);
        return { checker };
    }
    async update(id, updateCheckerDto) {
        await this.checkerService.update(id, updateCheckerDto);
        return { message: "updated checker successfully" };
    }
    async remove(id) {
        await this.checkerService.remove(id);
        return { message: "deleted checker successfully" };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)(enums_1.SwaggerConsumes.MULTIPART),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.UploadImageInterceptor)('avatar')),
    __param(0, (0, upload_decorators_1.UploadedFileDecorator)('image/*')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_checker_dto_1.CreateCheckerDto]),
    __metadata("design:returntype", Promise)
], CheckerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CheckerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CheckerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_checker_dto_1.UpdateCheckerDto]),
    __metadata("design:returntype", Promise)
], CheckerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CheckerController.prototype, "remove", null);
CheckerController = __decorate([
    (0, common_1.Controller)('checker'),
    (0, swagger_1.ApiTags)("checker"),
    (0, auth_decorator_1.AuthDecorator)(role_enum_1.ROLES.HOTELADMIN, role_enum_1.ROLES.COMPANYADMIN),
    __metadata("design:paramtypes", [checker_service_1.CheckerService])
], CheckerController);
exports.CheckerController = CheckerController;
//# sourceMappingURL=checker.controller.js.map