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
const core_1 = require("@nestjs/core");
let HotelService = class HotelService {
    constructor(userRepository, hotelLogoModel, request, authService) {
        this.userRepository = userRepository;
        this.hotelLogoModel = hotelLogoModel;
        this.request = request;
        this.authService = authService;
    }
    async create(createHotelDto) {
        createHotelDto.password = this.authService.hashPassword(createHotelDto.password);
        createHotelDto.role = role_enum_1.ROLES.HOTELADMIN;
        createHotelDto.price = JSON.parse(createHotelDto.price || "{}");
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
        createCleanerDto.hotel = new mongoose_2.Types.ObjectId(createCleanerDto.hotel);
        createCleanerDto.password = this.authService.hashPassword(createCleanerDto.password);
        createCleanerDto.role = role_enum_1.ROLES.CLEANER;
        const cleaner = await this.userRepository.create(createCleanerDto);
        return cleaner;
    }
    async addCompanyToHotel(hotelID, addCompanyDto) {
        await this.userRepository.updateOne({ _id: hotelID }, {
            $set: { company: new mongoose_2.Types.ObjectId(addCompanyDto.company) }
        });
        return true;
    }
    async createChecker(createCheckerDto) {
        createCheckerDto.hotel = new mongoose_2.Types.ObjectId(createCheckerDto.hotel);
        createCheckerDto.password = this.authService.hashPassword(createCheckerDto.password);
        createCheckerDto.role = role_enum_1.ROLES.CHECKER;
        const checker = await this.userRepository.create(createCheckerDto);
        return checker;
    }
    async createReception(createReceptionDto) {
        const user = this.request.user;
        createReceptionDto.hotel = new mongoose_2.Types.ObjectId(user._id);
        createReceptionDto.password = this.authService.hashPassword(createReceptionDto.password);
        createReceptionDto.role = role_enum_1.ROLES.HOTELRECEPTION;
        const reception = await this.userRepository.create(createReceptionDto);
        return reception;
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
        await this.userRepository.findOneAndRemove({ _id: new mongoose_2.Types.ObjectId(id) });
        return true;
    }
    async receptions(hotel) {
        const receptions = await this.userRepository.find({ hotel: new mongoose_2.Types.ObjectId(hotel), role: role_enum_1.ROLES.HOTELRECEPTION }).populate('hotel');
        return receptions;
    }
    async updateHotelLogo(logo) {
        const user = this.request.user;
        const hotelLogo = await this.hotelLogoModel.findOneAndUpdate({ hotel: user._id }, { logo }, { upsert: true });
        return hotelLogo;
    }
    async findHotelLogo(id) {
        const hotel = await this.hotelLogoModel.findOne({ hotel: new mongoose_2.Types.ObjectId(id) });
        if (!hotel)
            throw new common_1.NotFoundException("not found any hotel logo");
        return hotel;
    }
    async generateReport(id) {
        const cleaners = await this.hotelLogoModel.findOne({ role: role_enum_1.ROLES.CLEANER, hotel: new mongoose_2.Types.ObjectId(id) });
        return cleaners;
    }
};
HotelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)("hotel-logos")),
    __param(2, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model, Object, auth_service_1.AuthService])
], HotelService);
exports.HotelService = HotelService;
//# sourceMappingURL=hotel.service.js.map