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
exports.RoomTypeController = void 0;
const common_1 = require("@nestjs/common");
const room_type_service_1 = require("./room-type.service");
const create_room_type_dto_1 = require("./dto/create-room-type.dto");
const update_room_type_dto_1 = require("./dto/update-room-type.dto");
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../common/enums");
const auth_decorator_1 = require("../../common/decorators/auth.decorator");
const role_enum_1 = require("../../common/enums/role.enum");
let RoomTypeController = class RoomTypeController {
    constructor(roomTypeService) {
        this.roomTypeService = roomTypeService;
    }
    async create(createRoomTypeDto) {
        const roomType = await this.roomTypeService.create(createRoomTypeDto);
        return {
            message: "created room type successfully"
        };
    }
    async findAll() {
        const roomTypes = await this.roomTypeService.findAll();
        return {
            roomTypes
        };
    }
    async findOne(id) {
        const roomType = await this.roomTypeService.findOne(id);
        return {
            roomType
        };
    }
    async update(id, updateRoomTypeDto) {
        const updatedResult = await this.roomTypeService.update(id, updateRoomTypeDto);
        return {
            message: "update room type successfully"
        };
    }
    async remove(id) {
        const deletedResult = await this.roomTypeService.remove(id);
        return {
            message: "deleted room type successfully"
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "hotel role access" }),
    (0, swagger_1.ApiConsumes)(enums_1.SwaggerConsumes.URL_ENCODED, enums_1.SwaggerConsumes.JSON),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_room_type_dto_1.CreateRoomTypeDto]),
    __metadata("design:returntype", Promise)
], RoomTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "hotel role access" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: "hotel role access" }),
    (0, swagger_1.ApiParam)({ name: "id", type: "string" }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoomTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiParam)({ name: "id", type: "string" }),
    (0, swagger_1.ApiConsumes)(enums_1.SwaggerConsumes.URL_ENCODED, enums_1.SwaggerConsumes.JSON),
    (0, swagger_1.ApiOperation)({ summary: "hotel role access" }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_room_type_dto_1.UpdateRoomTypeDto]),
    __metadata("design:returntype", Promise)
], RoomTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({ name: "id", type: "string" }),
    (0, swagger_1.ApiOperation)({ summary: "hotel role access" }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoomTypeController.prototype, "remove", null);
RoomTypeController = __decorate([
    (0, common_1.Controller)('room-type'),
    (0, auth_decorator_1.AuthDecorator)(role_enum_1.ROLES.SUPERADMIN, role_enum_1.ROLES.HOTELADMIN, role_enum_1.ROLES.CHECKER, role_enum_1.ROLES.HOTELRECEPTION),
    (0, swagger_1.ApiTags)("AdminRoomType"),
    __metadata("design:paramtypes", [room_type_service_1.RoomTypeService])
], RoomTypeController);
exports.RoomTypeController = RoomTypeController;
//# sourceMappingURL=room-type.controller.js.map