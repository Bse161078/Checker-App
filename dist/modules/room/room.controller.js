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
exports.AdminRoomController = void 0;
const common_1 = require("@nestjs/common");
const room_service_1 = require("./room.service");
const create_room_dto_1 = require("./dto/create-room.dto");
const update_room_dto_1 = require("./dto/update-room.dto");
const swagger_1 = require("@nestjs/swagger");
const auth_decorator_1 = require("../../common/decorators/auth.decorator");
const role_enum_1 = require("../../common/enums/role.enum");
const enums_1 = require("../../common/enums");
const role_decorator_1 = require("../../common/decorators/role.decorator");
let AdminRoomController = class AdminRoomController {
    constructor(roomService) {
        this.roomService = roomService;
    }
    async create(createRoomDto) {
        const createdResult = await this.roomService.create(createRoomDto);
        return {
            message: "created room successfully"
        };
    }
    async findAll() {
        const rooms = await this.roomService.findAll();
        return {
            rooms
        };
    }
    async findOne(id) {
        const room = await this.roomService.findOne(id);
        return {
            room
        };
    }
    async update(id, updateRoomDto) {
        const updatedResult = await this.roomService.update(id, updateRoomDto);
        return {
            message: "updated was successfully"
        };
    }
    async remove(id) {
        const deletedResult = await this.roomService.remove(id);
        return {
            message: "deleted room successfully"
        };
    }
    async getCleanerBills() {
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)(enums_1.SwaggerConsumes.URL_ENCODED, enums_1.SwaggerConsumes.JSON),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_room_dto_1.CreateRoomDto]),
    __metadata("design:returntype", Promise)
], AdminRoomController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, role_decorator_1.Roles)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminRoomController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, role_decorator_1.Roles)(),
    (0, swagger_1.ApiParam)({ name: "id", type: "string" }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminRoomController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiParam)({ name: "id", type: "string" }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_room_dto_1.UpdateRoomDto]),
    __metadata("design:returntype", Promise)
], AdminRoomController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({ name: "id", type: "string" }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminRoomController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('cleaner-bills'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminRoomController.prototype, "getCleanerBills", null);
AdminRoomController = __decorate([
    (0, common_1.Controller)('room'),
    (0, swagger_1.ApiTags)("Admin-room"),
    (0, auth_decorator_1.AuthDecorator)(role_enum_1.ROLES.HOTELADMIN, role_enum_1.ROLES.HOTELRECEPTION),
    __metadata("design:paramtypes", [room_service_1.AdminRoomService])
], AdminRoomController);
exports.AdminRoomController = AdminRoomController;
//# sourceMappingURL=room.controller.js.map