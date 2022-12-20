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
exports.CleanerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_decorator_1 = require("../../common/decorators/auth.decorator");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const user_decorator_1 = require("../../common/decorators/user.decorator");
const enums_1 = require("../../common/enums");
const role_enum_1 = require("../../common/enums/role.enum");
const file_upload_interceptor_1 = require("../../common/interceptors/file-upload.interceptor");
const room_dto_1 = require("../company/room/dto/room.dto");
const cleaner_service_1 = require("./cleaner.service");
const create_cleaner_dto_1 = require("./dto/create-cleaner.dto");
const update_cleaner_dto_1 = require("./dto/update-cleaner.dto");
const cleaner_dto_1 = require("./dto/cleaner.dto");
let CleanerController = class CleanerController {
    constructor(cleanerService) {
        this.cleanerService = cleanerService;
    }
    async create(avatar, createCleanerDto) {
        if (avatar)
            createCleanerDto.avatar = avatar.path.slice(7);
        const cleaner = await this.cleanerService.create(createCleanerDto);
        return { cleaner };
    }
    async findAll() {
        const cleaners = await this.cleanerService.findAll();
        return { cleaners };
    }
    async startCleaning(param, user) {
        const { roomID } = param;
        const cleaningRoomStatus = await this.cleanerService.startCleaningRoom(roomID);
        return { message: `cleaner starts cleaning at ${cleaningRoomStatus.cleaningStartAt}` };
    }
    async finishCleaning(param, user) {
        const { roomID } = param;
        const cleaningRoomStatus = await this.cleanerService.endCleaningRoom(roomID);
        return { message: `cleaner finished cleaning at ${cleaningRoomStatus.cleaningEndAt}` };
    }
    async getCleanerCompany(param, user) {
        const { companyID } = param;
        const cleaners = await this.cleanerService.getCompanyCleaners(companyID);
        return {
            cleaners
        };
    }
    async getCleanerCompanyById(param, user) {
        const { cleanerID } = param;
        const cleaner = await this.cleanerService.getCompanyCleanerById(cleanerID);
        return {
            cleaner
        };
    }
    async getCleanerHotel(param, user) {
        const { hotelID } = param;
        const cleaners = await this.cleanerService.getHotelCleaners(hotelID);
        return {
            cleaners
        };
    }
    async getCleanerHotelById(param, user) {
        const { cleanerID } = param;
        const cleaner = await this.cleanerService.getHotelCleanerById(cleanerID);
        return {
            cleaner
        };
    }
    async findOne(cleanerIdDto) {
        const cleaner = await this.cleanerService.findOne(cleanerIdDto.cleanerID);
        return { cleaner };
    }
    async update(cleanerIdDto, updateCleanerDto) {
        await this.cleanerService.update(cleanerIdDto.cleanerID, updateCleanerDto);
        return { message: "updated cleaner successfully" };
    }
    async remove(cleanerIdDto) {
        await this.cleanerService.remove(cleanerIdDto.cleanerID);
        return { message: "deleted cleaner successfully" };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)(enums_1.SwaggerConsumes.MULTIPART),
    (0, swagger_1.ApiOperation)({ summary: "hotel and company role access" }),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.UploadImageInterceptor)('avatar')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_cleaner_dto_1.CreateCleanerDto]),
    __metadata("design:returntype", Promise)
], CleanerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, role_decorator_1.Roles)(role_enum_1.ROLES.CHECKER, role_enum_1.ROLES.COMPANYADMIN, role_enum_1.ROLES.HOTELADMIN),
    (0, swagger_1.ApiOperation)({ summary: "hotel and company and checker role access" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CleanerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("/start-cleaning/:roomID"),
    (0, swagger_1.ApiOperation)({ summary: "supper-admin access" }),
    (0, swagger_1.ApiParam)({ name: "roomID", type: 'string' }),
    (0, role_decorator_1.Roles)(role_enum_1.ROLES.CLEANER),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [room_dto_1.RoomIdDto, Object]),
    __metadata("design:returntype", Promise)
], CleanerController.prototype, "startCleaning", null);
__decorate([
    (0, common_1.Get)("/finish-cleaning/:roomID"),
    (0, swagger_1.ApiOperation)({ summary: "supper-admin access" }),
    (0, swagger_1.ApiParam)({ name: "roomID", type: 'string' }),
    (0, role_decorator_1.Roles)(role_enum_1.ROLES.CLEANER),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [room_dto_1.RoomIdDto, Object]),
    __metadata("design:returntype", Promise)
], CleanerController.prototype, "finishCleaning", null);
__decorate([
    (0, common_1.Get)("/get-company-cleaners/:companyID"),
    (0, swagger_1.ApiOperation)({ summary: "supper-admin access" }),
    (0, swagger_1.ApiParam)({ name: "companyID", type: 'string' }),
    (0, role_decorator_1.Roles)(role_enum_1.ROLES.SUPERADMIN),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cleaner_dto_1.CompanyIdDto, Object]),
    __metadata("design:returntype", Promise)
], CleanerController.prototype, "getCleanerCompany", null);
__decorate([
    (0, common_1.Get)("/get-company-cleaner-by-id/:cleanerID"),
    (0, swagger_1.ApiOperation)({ summary: "supper-admin access" }),
    (0, swagger_1.ApiParam)({ name: "cleanerID", type: 'string' }),
    (0, role_decorator_1.Roles)(role_enum_1.ROLES.SUPERADMIN),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cleaner_dto_1.CleanerIdDto, Object]),
    __metadata("design:returntype", Promise)
], CleanerController.prototype, "getCleanerCompanyById", null);
__decorate([
    (0, common_1.Get)("/get-hotel-cleaners/:hotelID"),
    (0, swagger_1.ApiParam)({ name: "hotelID", type: 'string' }),
    (0, role_decorator_1.Roles)(role_enum_1.ROLES.SUPERADMIN),
    (0, swagger_1.ApiOperation)({ summary: "supper-admin role access" }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cleaner_dto_1.HotelIdDto, Object]),
    __metadata("design:returntype", Promise)
], CleanerController.prototype, "getCleanerHotel", null);
__decorate([
    (0, common_1.Get)("/get-hotel-cleaner-by-id/:cleanerID"),
    (0, swagger_1.ApiParam)({ name: "cleanerID", type: 'string' }),
    (0, role_decorator_1.Roles)(role_enum_1.ROLES.SUPERADMIN),
    (0, swagger_1.ApiOperation)({ summary: "supper-admin role access" }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cleaner_dto_1.CleanerIdDto, Object]),
    __metadata("design:returntype", Promise)
], CleanerController.prototype, "getCleanerHotelById", null);
__decorate([
    (0, common_1.Get)(':cleanerID'),
    (0, role_decorator_1.Roles)(role_enum_1.ROLES.CHECKER, role_enum_1.ROLES.COMPANYADMIN, role_enum_1.ROLES.HOTELADMIN),
    (0, swagger_1.ApiOperation)({ summary: "hotel and company and checker role access" }),
    (0, swagger_1.ApiParam)({ name: "cleanerID", type: 'string' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cleaner_dto_1.CleanerIdDto]),
    __metadata("design:returntype", Promise)
], CleanerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':cleanerID'),
    (0, swagger_1.ApiParam)({ name: "cleanerID", type: 'string' }),
    (0, swagger_1.ApiOperation)({ summary: "hotel and company role access" }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cleaner_dto_1.CleanerIdDto, update_cleaner_dto_1.UpdateCleanerDto]),
    __metadata("design:returntype", Promise)
], CleanerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':cleanerID'),
    (0, swagger_1.ApiParam)({ name: "cleanerID", type: 'string' }),
    (0, swagger_1.ApiOperation)({ summary: "hotel and company role access" }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cleaner_dto_1.CleanerIdDto]),
    __metadata("design:returntype", Promise)
], CleanerController.prototype, "remove", null);
CleanerController = __decorate([
    (0, common_1.Controller)('cleaner'),
    (0, swagger_1.ApiTags)("cleaner"),
    (0, auth_decorator_1.AuthDecorator)(role_enum_1.ROLES.HOTELADMIN, role_enum_1.ROLES.COMPANYADMIN),
    __metadata("design:paramtypes", [cleaner_service_1.CleanerService])
], CleanerController);
exports.CleanerController = CleanerController;
//# sourceMappingURL=cleaner.controller.js.map