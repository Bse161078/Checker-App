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
exports.ReceptionController = void 0;
const common_1 = require("@nestjs/common");
const reception_service_1 = require("./reception.service");
const create_reception_dto_1 = require("./dto/create-reception.dto");
const enums_1 = require("../../common/enums");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const role_enum_1 = require("../../common/enums/role.enum");
const swagger_1 = require("@nestjs/swagger");
const auth_decorator_1 = require("../../common/decorators/auth.decorator");
let ReceptionController = class ReceptionController {
    constructor(receptionService) {
        this.receptionService = receptionService;
    }
    create(createReceptionDto) {
        return this.receptionService.create(createReceptionDto);
    }
    findAll() {
        return this.receptionService.getRooms();
    }
    deleteReception(receptionId) {
        return this.receptionService.deleteReception(receptionId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reception_dto_1.CreateReceptionDto]),
    __metadata("design:returntype", void 0)
], ReceptionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReceptionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)("/:receptionId"),
    (0, swagger_1.ApiConsumes)(enums_1.SwaggerConsumes.URL_ENCODED, enums_1.SwaggerConsumes.JSON),
    (0, swagger_1.ApiOperation)({ summary: "super admin and hotel admin can delete reception" }),
    (0, role_decorator_1.Roles)(role_enum_1.ROLES.SUPERADMIN, role_enum_1.ROLES.HOTELADMIN),
    (0, swagger_1.ApiParam)({ name: "receptionId" }),
    __param(0, (0, common_1.Param)('receptionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReceptionController.prototype, "deleteReception", null);
ReceptionController = __decorate([
    (0, common_1.Controller)('reception'),
    (0, auth_decorator_1.AuthDecorator)(role_enum_1.ROLES.SUPERADMIN, role_enum_1.ROLES.HOTELADMIN),
    __metadata("design:paramtypes", [reception_service_1.ReceptionService])
], ReceptionController);
exports.ReceptionController = ReceptionController;
//# sourceMappingURL=reception.controller.js.map