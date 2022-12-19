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
exports.BedController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("mongoose");
const auth_decorator_1 = require("../../common/decorators/auth.decorator");
const enums_1 = require("../../common/enums");
const role_enum_1 = require("../../common/enums/role.enum");
const room_dto_1 = require("../room/dto/room.dto");
const bed_service_1 = require("./bed.service");
const create_bed_dto_1 = require("./dto/create-bed.dto");
const upload_file_bed_interceptor_1 = require("./interceptors/upload-file-bed.interceptor");
let BedController = class BedController {
    constructor(bedService) {
        this.bedService = bedService;
    }
    async create(createBedDto, param, files) {
        createBedDto.room = new mongoose_1.Types.ObjectId(param.roomID);
        const bed = await this.bedService.create(createBedDto, files);
        return {
            message: "created bed report successfully"
        };
    }
    async getBedDetail(param) {
        const roomId = new mongoose_1.Types.ObjectId(param.roomID);
        const bed = await this.bedService.getBedStatus(roomId);
        return { bed };
    }
};
__decorate([
    (0, common_1.Post)("/:roomID"),
    (0, swagger_1.ApiConsumes)(enums_1.SwaggerConsumes.MULTIPART),
    (0, swagger_1.ApiParam)({ name: "roomID", type: "string", required: true }),
    (0, common_1.UseInterceptors)(upload_file_bed_interceptor_1.BedFileUpload),
    (0, swagger_1.ApiOperation)({ summary: "checker role access" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bed_dto_1.CreateBedDto,
        room_dto_1.RoomIdDto, Object]),
    __metadata("design:returntype", Promise)
], BedController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("/:roomID"),
    (0, swagger_1.ApiParam)({ name: "roomID", type: "string", required: true }),
    (0, swagger_1.ApiOperation)({ summary: "checker role access" }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [room_dto_1.RoomIdDto]),
    __metadata("design:returntype", Promise)
], BedController.prototype, "getBedDetail", null);
BedController = __decorate([
    (0, common_1.Controller)('bed'),
    (0, swagger_1.ApiTags)("Bed"),
    (0, auth_decorator_1.AuthDecorator)(role_enum_1.ROLES.CHECKER),
    __metadata("design:paramtypes", [bed_service_1.BedService])
], BedController);
exports.BedController = BedController;
//# sourceMappingURL=bed.controller.js.map