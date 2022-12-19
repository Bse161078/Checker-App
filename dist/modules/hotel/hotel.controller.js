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
exports.HotelController = void 0;
const common_1 = require("@nestjs/common");
const hotel_service_1 = require("./hotel.service");
const create_hotel_dto_1 = require("./dto/create-hotel.dto");
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../common/enums");
const auth_decorator_1 = require("../../common/decorators/auth.decorator");
const role_enum_1 = require("../../common/enums/role.enum");
const hotel_dto_1 = require("./dto/hotel.dto");
let HotelController = class HotelController {
    constructor(hotelService) {
        this.hotelService = hotelService;
    }
    async create(createHotelDto) {
        const hotel = await this.hotelService.create(createHotelDto);
        return {
            message: "created hotel account successfully"
        };
    }
    async createHotelCleaner(avatar, createCleanerDto) {
        if (avatar)
            createCleanerDto.avatar = avatar.path.slice(7);
        const cleaner = await this.hotelService.createCleaner(createCleanerDto);
        return {
            message: "created hotel account successfully"
        };
    }
    async findAll() {
        const hotels = await this.hotelService.findAll();
        return {
            hotels
        };
    }
    async findOne(hotelDto) {
        const hotel = await this.hotelService.findOne(hotelDto.hotelID);
        return {
            hotel
        };
    }
    async remove(hotelDto) {
        const deletedResult = await this.hotelService.remove(hotelDto.hotelID);
        return {
            message: "deleted hotel successfully"
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)(enums_1.SwaggerConsumes.URL_ENCODED, enums_1.SwaggerConsumes.JSON),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hotel_dto_1.CreateHotelDto]),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("/create-hotel-cleaner/:hotelID"),
    (0, swagger_1.ApiParam)({ name: "hotelID" }),
    (0, swagger_1.ApiConsumes)(enums_1.SwaggerConsumes.MULTIPART),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, hotel_dto_1.CreateHotelCleanerDto]),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "createHotelCleaner", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':hotelID'),
    (0, swagger_1.ApiParam)({ name: "hotelID", type: "string" }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hotel_dto_1.HotelDto]),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':hotelID'),
    (0, swagger_1.ApiParam)({ name: "hotelID", type: "string" }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hotel_dto_1.HotelDto]),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "remove", null);
HotelController = __decorate([
    (0, common_1.Controller)('hotel'),
    (0, swagger_1.ApiTags)("hotel-admin"),
    (0, auth_decorator_1.AuthDecorator)(role_enum_1.ROLES.SUPERADMIN),
    __metadata("design:paramtypes", [hotel_service_1.HotelService])
], HotelController);
exports.HotelController = HotelController;
//# sourceMappingURL=hotel.controller.js.map