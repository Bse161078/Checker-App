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
exports.FloorController = void 0;
const common_1 = require("@nestjs/common");
const floor_service_1 = require("./floor.service");
const create_floor_dto_1 = require("./dto/create-floor.dto");
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../common/enums");
const upload_image_interceptor_1 = require("./interceptors/upload-image.interceptor");
const auth_decorator_1 = require("../../common/decorators/auth.decorator");
const role_enum_1 = require("../../common/enums/role.enum");
const room_dto_1 = require("../room/dto/room.dto");
const mongoose_1 = require("mongoose");
let FloorController = class FloorController {
    constructor(floorService) {
        this.floorService = floorService;
    }
    async saveFloorData(files, createFloorDto, param) {
        createFloorDto.room = new mongoose_1.Types.ObjectId(param.roomID);
        await this.floorService.create(createFloorDto, files);
        return { message: "save floor data successfully" };
    }
    async getFloorDetail(param) {
        const roomId = new mongoose_1.Types.ObjectId(param.roomID);
        const floor = await this.floorService.getFloorStatus(roomId);
        return { floor };
    }
};
__decorate([
    (0, common_1.Post)("/:roomID"),
    (0, swagger_1.ApiParam)({ name: "roomID", type: "string", required: true }),
    (0, swagger_1.ApiConsumes)(enums_1.SwaggerConsumes.MULTIPART),
    (0, common_1.UseInterceptors)(upload_image_interceptor_1.FloorFileUpload),
    (0, swagger_1.ApiOperation)({ summary: "checker role access" }),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_floor_dto_1.CreateFloorDto,
        room_dto_1.RoomIdDto]),
    __metadata("design:returntype", Promise)
], FloorController.prototype, "saveFloorData", null);
__decorate([
    (0, common_1.Get)("/:roomID"),
    (0, swagger_1.ApiParam)({ name: "roomID", type: "string", required: true }),
    (0, swagger_1.ApiOperation)({ summary: "checker role access" }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [room_dto_1.RoomIdDto]),
    __metadata("design:returntype", Promise)
], FloorController.prototype, "getFloorDetail", null);
FloorController = __decorate([
    (0, common_1.Controller)('floor'),
    (0, swagger_1.ApiTags)("Floor"),
    (0, auth_decorator_1.AuthDecorator)(role_enum_1.ROLES.CHECKER),
    __metadata("design:paramtypes", [floor_service_1.FloorService])
], FloorController);
exports.FloorController = FloorController;
//# sourceMappingURL=floor.controller.js.map