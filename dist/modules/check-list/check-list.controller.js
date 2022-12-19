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
exports.CheckListController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const check_list_service_1 = require("./check-list.service");
const create_check_list_dto_1 = require("./dto/create-check-list.dto");
const auth_decorator_1 = require("../../common/decorators/auth.decorator");
const role_enum_1 = require("../../common/enums/role.enum");
const role_decorator_1 = require("../../common/decorators/role.decorator");
let CheckListController = class CheckListController {
    constructor(checkListService) {
        this.checkListService = checkListService;
    }
    async create(createCheckListDto) {
        const createdResult = await this.checkListService.create(createCheckListDto);
        return {
            message: "created/updated order list successfully"
        };
    }
    async findAll() {
        const checkList = await this.checkListService.findAll();
        return {
            checkList
        };
    }
    async findOne(id) {
        const checkList = await this.checkListService.findOne(id);
        return { checkList };
    }
    async remove(id) {
        const deletedResult = await this.checkListService.remove(id);
        return {
            message: "deleted order list successfully"
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)("application/json"),
    (0, swagger_1.ApiOperation)({ summary: "checker role access" }),
    (0, role_decorator_1.Roles)(role_enum_1.ROLES.CHECKER),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_check_list_dto_1.CreateCheckListDto]),
    __metadata("design:returntype", Promise)
], CheckListController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, role_decorator_1.Roles)(role_enum_1.ROLES.CHECKER, role_enum_1.ROLES.HOTELADMIN, role_enum_1.ROLES.COMPANYADMIN),
    (0, swagger_1.ApiOperation)({ summary: "checker and hotel and company role access" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CheckListController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, role_decorator_1.Roles)(role_enum_1.ROLES.CHECKER, role_enum_1.ROLES.HOTELADMIN, role_enum_1.ROLES.COMPANYADMIN),
    (0, swagger_1.ApiOperation)({ summary: "checker and hotel and company role access" }),
    (0, swagger_1.ApiParam)({ name: "id" }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CheckListController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, role_decorator_1.Roles)(role_enum_1.ROLES.HOTELADMIN),
    (0, swagger_1.ApiOperation)({ summary: "hotel role access" }),
    (0, swagger_1.ApiParam)({ name: "id" }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CheckListController.prototype, "remove", null);
CheckListController = __decorate([
    (0, common_1.Controller)('check-list'),
    (0, swagger_1.ApiTags)("checkList"),
    (0, auth_decorator_1.AuthDecorator)(role_enum_1.ROLES.CHECKER, role_enum_1.ROLES.COMPANYADMIN, role_enum_1.ROLES.HOTELADMIN),
    __metadata("design:paramtypes", [check_list_service_1.CheckListService])
], CheckListController);
exports.CheckListController = CheckListController;
//# sourceMappingURL=check-list.controller.js.map