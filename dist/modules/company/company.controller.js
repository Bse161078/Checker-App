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
exports.CompanyController = void 0;
const common_1 = require("@nestjs/common");
const company_service_1 = require("./company.service");
const create_company_dto_1 = require("./dto/create-company.dto");
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../common/enums");
const auth_decorator_1 = require("../../common/decorators/auth.decorator");
const role_enum_1 = require("../../common/enums/role.enum");
const company_dto_1 = require("./dto/company.dto");
let CompanyController = class CompanyController {
    constructor(companyService) {
        this.companyService = companyService;
    }
    async create(createCompanyDto) {
        const company = await this.companyService.create(createCompanyDto);
        return {
            message: "created company account successfully"
        };
    }
    async createHotelCleaner(avatar, createCleanerDto) {
        if (avatar)
            createCleanerDto.avatar = avatar.path.slice(7);
        const cleaner = await this.companyService.createCleaner(createCleanerDto);
        return {
            message: "created company cleaner account successfully"
        };
    }
    async createHotelChecker(avatar, createCheckerDto) {
        if (avatar)
            createCheckerDto.avatar = avatar.path.slice(7);
        const cleaner = await this.companyService.createChecker(createCheckerDto);
        return {
            message: "created company checker account successfully"
        };
    }
    async findAll() {
        const companies = await this.companyService.findAll();
        return {
            companies
        };
    }
    async findOne(companyDto) {
        const company = await this.companyService.findOne(companyDto.companyID);
        return {
            company
        };
    }
    async remove(companyDto) {
        const deletedResult = await this.companyService.remove(companyDto.companyID);
        return {
            message: "deleted company successfully"
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)(enums_1.SwaggerConsumes.URL_ENCODED, enums_1.SwaggerConsumes.JSON),
    (0, swagger_1.ApiOperation)({ summary: "supper-admin role access" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_company_dto_1.CreateCompanyDto]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("/create-company-cleaner"),
    (0, swagger_1.ApiConsumes)(enums_1.SwaggerConsumes.MULTIPART),
    (0, swagger_1.ApiOperation)({ summary: "supper-admin role access" }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, company_dto_1.CreateCompanyCleanerDto]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "createHotelCleaner", null);
__decorate([
    (0, common_1.Post)("/create-company-checker"),
    (0, swagger_1.ApiOperation)({ summary: "supper-admin role access" }),
    (0, swagger_1.ApiConsumes)(enums_1.SwaggerConsumes.MULTIPART),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, company_dto_1.CreateCompanyCheckerDto]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "createHotelChecker", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "supper-admin role access" }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':companyID'),
    (0, swagger_1.ApiParam)({ name: "companyID", type: "string" }),
    (0, swagger_1.ApiOperation)({ summary: "supper-admin role access" }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [company_dto_1.CompanyDto]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':companyID'),
    (0, swagger_1.ApiParam)({ name: "companyID", type: "string" }),
    (0, swagger_1.ApiOperation)({ summary: "supper-admin role access" }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [company_dto_1.CompanyDto]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "remove", null);
CompanyController = __decorate([
    (0, common_1.Controller)('company'),
    (0, swagger_1.ApiTags)('company-supperAdmin'),
    (0, auth_decorator_1.AuthDecorator)(role_enum_1.ROLES.SUPERADMIN),
    __metadata("design:paramtypes", [company_service_1.CompanyService])
], CompanyController);
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map