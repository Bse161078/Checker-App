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
exports.HotelService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("../user/entities/user.entity");
const mongoose_2 = require("mongoose");
const role_enum_1 = require("../../common/enums/role.enum");
const auth_service_1 = require("../auth/services/auth.service");
let HotelService = class HotelService {
    constructor(userRepository, authService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }
    async create(createHotelDto) {
        createHotelDto.password = this.authService.hashPassword(createHotelDto.password);
        createHotelDto.role = role_enum_1.ROLES.COMPANYADMIN;
        let hotel = null;
        if (createHotelDto.username)
            hotel = await this.userRepository.findOne({ username: createHotelDto.username });
        if (hotel)
            throw new common_1.BadRequestException("username already exists");
        if (createHotelDto.email)
            hotel = await this.userRepository.findOne({ email: createHotelDto.email });
        if (hotel)
            throw new common_1.BadRequestException("email already exists");
        const createdResult = await this.userRepository.create(createHotelDto);
        return createdResult;
    }
    async createCleaner(createCleanerDto) {
        createCleanerDto.password = this.authService.hashPassword(createCleanerDto.password);
        createCleanerDto.role = role_enum_1.ROLES.CLEANER;
        const cleaner = await this.userRepository.create(createCleanerDto);
        return cleaner;
    }
    async findAll() {
        const hotels = await this.userRepository.find({ role: role_enum_1.ROLES.HOTELADMIN });
        return hotels;
    }
    async findOne(id) {
        const hotel = await this.userRepository.findOne({ _id: id, role: role_enum_1.ROLES.HOTELADMIN });
        if (!hotel)
            throw new common_1.NotFoundException("not found any hotel");
        return hotel;
    }
    async remove(id) {
        await this.userRepository.updateMany({ hotel: id }, {
            $unset: { hotel: "" }
        });
        return true;
    }
};
HotelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        auth_service_1.AuthService])
], HotelService);
exports.HotelService = HotelService;
//# sourceMappingURL=hotel.service.js.map