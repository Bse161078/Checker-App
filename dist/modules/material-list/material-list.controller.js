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
exports.MaterialListController = void 0;
const common_1 = require("@nestjs/common");
const material_list_service_1 = require("./material-list.service");
const create_material_list_dto_1 = require("./dto/create-material-list.dto");
const update_material_list_dto_1 = require("./dto/update-material-list.dto");
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../common/enums");
const auth_decorator_1 = require("../../common/decorators/auth.decorator");
const role_enum_1 = require("../../common/enums/role.enum");
let MaterialListController = class MaterialListController {
    constructor(materialListService) {
        this.materialListService = materialListService;
    }
    async create(createMaterialListDto) {
        const createdResult = await this.materialListService.create(createMaterialListDto);
        return {
            message: "created material item successfully"
        };
    }
    async findAll() {
        const materials = await this.materialListService.findAll();
        return {
            materials
        };
    }
    async findOne(id) {
        const material = await this.materialListService.findOne(id);
        return {
            material
        };
    }
    async update(id, updateMaterialListDto) {
        const updatedResult = await this.materialListService.update(id, updateMaterialListDto);
        return {
            message: "updated material item successfully"
        };
    }
    async remove(id) {
        const deletedResult = await this.materialListService.remove(id);
        return {
            message: "deleted material item successfully"
        };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "checker and hotel-admin role access" }),
    (0, swagger_1.ApiConsumes)(enums_1.SwaggerConsumes.URL_ENCODED, enums_1.SwaggerConsumes.JSON),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_material_list_dto_1.CreateMaterialListDto]),
    __metadata("design:returntype", Promise)
], MaterialListController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "checker and hotel-admin role access" }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaterialListController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "checker and hotel-admin role access" }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MaterialListController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "checker and hotel-admin role access" }),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiConsumes)(enums_1.SwaggerConsumes.URL_ENCODED, enums_1.SwaggerConsumes.JSON),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_material_list_dto_1.UpdateMaterialListDto]),
    __metadata("design:returntype", Promise)
], MaterialListController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "checker and hotel-admin role access" }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MaterialListController.prototype, "remove", null);
MaterialListController = __decorate([
    (0, common_1.Controller)('material-list'),
    (0, swagger_1.ApiTags)('Material-List'),
    (0, auth_decorator_1.AuthDecorator)(role_enum_1.ROLES.HOTELADMIN, role_enum_1.ROLES.CHECKER),
    __metadata("design:paramtypes", [material_list_service_1.MaterialListService])
], MaterialListController);
exports.MaterialListController = MaterialListController;
//# sourceMappingURL=material-list.controller.js.map