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
const enums_1 = require("../../common/enums");
const role_enum_1 = require("../../common/enums/role.enum");
const file_upload_interceptor_1 = require("../../common/interceptors/file-upload.interceptor");
const checker_service_1 = require("./checker.service");
const create_checker_dto_1 = require("./dto/create-checker.dto");
const update_checker_dto_1 = require("./dto/update-checker.dto");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const cleaner_dto_1 = require("../cleaner/dto/cleaner.dto");
const checker_dto_1 = require("./dto/checker.dto");
const user_decorator_1 = require("../../common/decorators/user.decorator");
let CheckerController = class CheckerController {
    constructor(checkerService) {
        this.checkerService = checkerService;
    }
    async create(avatar, createCheckerDto) {
        if (avatar)
            createCheckerDto.avatar = avatar.path.slice(7);
        const checker = await this.checkerService.create(createCheckerDto);
        return { checker };
    }
    async findAll() {
        const checkers = await this.checkerService.findAll();
        return { checkers };
    }
    async getCheckerCompany(param, user) {
        const { companyID } = param;
        const checkers = await this.checkerService.getCompanyCheckers(companyID);
        return {
            checkers
        };
    }
    async getCheckerCompanyById(param, user) {
        const { checkerID } = param;
        const checker = await this.checkerService.getCompanyCheckerById(checkerID);
        return {
            checker
        };
    }
    async getCleanerHotel(param, user) {
        const { hotelID } = param;
        const checkers = await this.checkerService.getHotelCheckers(hotelID);
        return {
            checkers
        };
    }
    async getCleanerHotelById(param, user) {
        const { checkerID } = param;
        const checker = await this.checkerService.getHotelCheckerById(checkerID);
        return {
            checker
        };
    }
    findOne(checkerIdDto) {
        const checker = this.checkerService.findOne(checkerIdDto.checkerID);
        return { checker };
    }
    async update(checkerIdDto, updateCheckerDto) {
        await this.checkerService.update(checkerIdDto.checkerID, updateCheckerDto);
        return { message: "updated checker successfully" };
    }
    async remove(checkerIdDto) {
        await this.checkerService.remove(checkerIdDto.checkerID);
        return { message: "deleted checker successfully" };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)(enums_1.SwaggerConsumes.MULTIPART),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.UploadImageInterceptor)('avatar')),
    (0, swagger_1.ApiOperation)({ summary: "hotel and company role access" }),
    __param(0, (0, common_1.UploadedFile)()),
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
    (0, common_1.Get)("/get-company-checkers/:companyID"),
    (0, swagger_1.ApiOperation)({ summary: "supper-admin role access" }),
    (0, swagger_1.ApiParam)({ name: "companyID", type: 'string' }),
    (0, role_decorator_1.Roles)(role_enum_1.ROLES.SUPERADMIN),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cleaner_dto_1.CompanyIdDto, Object]),
    __metadata("design:returntype", Promise)
], CheckerController.prototype, "getCheckerCompany", null);
__decorate([
    (0, common_1.Get)("/get-company-checker-by-id/:checkerID"),
    (0, swagger_1.ApiOperation)({ summary: "supper-admin role access" }),
    (0, swagger_1.ApiParam)({ name: "cleanerID", type: 'string' }),
    (0, role_decorator_1.Roles)(role_enum_1.ROLES.SUPERADMIN),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [checker_dto_1.CheckerIdDto, Object]),
    __metadata("design:returntype", Promise)
], CheckerController.prototype, "getCheckerCompanyById", null);
__decorate([
    (0, common_1.Get)("/get-hotel-checkers/:hotelID"),
    (0, swagger_1.ApiOperation)({ summary: "supper-admin role access" }),
    (0, swagger_1.ApiParam)({ name: "hotelID", type: 'string' }),
    (0, role_decorator_1.Roles)(role_enum_1.ROLES.SUPERADMIN),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cleaner_dto_1.HotelIdDto, Object]),
    __metadata("design:returntype", Promise)
], CheckerController.prototype, "getCleanerHotel", null);
__decorate([
    (0, common_1.Get)("/get-hotel-checker-by-id/:cleanerID"),
    (0, swagger_1.ApiOperation)({ summary: "supper-admin role access" }),
    (0, swagger_1.ApiParam)({ name: "cleanerID", type: 'string' }),
    (0, role_decorator_1.Roles)(role_enum_1.ROLES.SUPERADMIN),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [checker_dto_1.CheckerIdDto, Object]),
    __metadata("design:returntype", Promise)
], CheckerController.prototype, "getCleanerHotelById", null);
__decorate([
    (0, common_1.Get)(':checkerID'),
    (0, swagger_1.ApiParam)({ name: "checkerID" }),
    (0, swagger_1.ApiOperation)({ summary: "hotel and company role access" }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [checker_dto_1.CheckerIdDto]),
    __metadata("design:returntype", void 0)
], CheckerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':checkerID'),
    (0, swagger_1.ApiParam)({ name: "checkerID" }),
    (0, swagger_1.ApiOperation)({ summary: "hotel and company role access" }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [checker_dto_1.CheckerIdDto, update_checker_dto_1.UpdateCheckerDto]),
    __metadata("design:returntype", Promise)
], CheckerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':checkerID'),
    (0, swagger_1.ApiParam)({ name: "checkerID" }),
    (0, swagger_1.ApiOperation)({ summary: "hotel and company role access" }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [checker_dto_1.CheckerIdDto]),
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