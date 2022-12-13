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
exports.CleanerService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const role_enum_1 = require("../../common/enums/role.enum");
const functions_1 = require("../../common/utils/functions");
const auth_service_1 = require("../auth/services/auth.service");
const user_entity_1 = require("../user/entities/user.entity");
let CleanerService = class CleanerService {
    constructor(userRepository, request, authService) {
        this.userRepository = userRepository;
        this.request = request;
        this.authService = authService;
    }
    async create(createCleanerDto) {
        const user = this.request.user;
        if (user.role == role_enum_1.ADMIN_ROLES.COMPANYADMIN) {
            createCleanerDto.company = user._id;
            const { hotelID } = createCleanerDto;
            if (hotelID)
                createCleanerDto.hotel = new mongoose_2.Types.ObjectId(hotelID);
        }
        if (user.role == role_enum_1.ADMIN_ROLES.HOTELADMIN)
            createCleanerDto.hotel = user._id;
        createCleanerDto.password = this.authService.hashPassword(createCleanerDto.password);
        const cleaner = await this.userRepository.create(createCleanerDto);
        return cleaner;
    }
    async findAll() {
        const user = this.request.user;
        let filter = {};
        if (user.role == role_enum_1.ROLES.COMPANYADMIN) {
            filter['company'] = user._id;
        }
        else if (user.role == role_enum_1.ROLES.HOTELADMIN) {
            filter['hotel'] = user._id;
        }
        else if (user.role == role_enum_1.ROLES.SUPERADMIN) {
            filter = {};
        }
        else {
            filter['hotel'] = user.hotel;
        }
        if (user.role != role_enum_1.ROLES.SUPERADMIN && Object.values(filter).length == 0)
            return [];
        const cleaners = await this.userRepository.find(filter);
        return cleaners;
    }
    async findOne(id) {
        const cleanerID = new mongoose_2.Types.ObjectId(id);
        const hotel = this.request.user.hotel;
        const cleaner = await this.userRepository.findOne({ _id: cleanerID, hotel });
        if (cleaner)
            return cleaner;
        throw new common_1.NotFoundException("cleaner not found");
    }
    async update(id, updateCleanerDto) {
        const cleaner = await this.findOne(id);
        const newCleanerDto = (0, functions_1.removeEmptyFieldsObject)(updateCleanerDto);
        const updatedResult = await this.userRepository.updateOne({ _id: cleaner._id }, {
            $set: newCleanerDto
        });
        if (!!updatedResult.modifiedCount)
            return true;
        throw new common_1.BadRequestException("updated cleaner failed");
    }
    async remove(id) {
        const cleaner = await this.findOne(id);
        const deletedResult = await this.userRepository.deleteOne({ _id: cleaner._id });
        if (!!deletedResult.deletedCount)
            return true;
        throw new common_1.BadRequestException("deleted cleaner failed");
    }
};
CleanerService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __param(1, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [mongoose_2.Model, Object, auth_service_1.AuthService])
], CleanerService);
exports.CleanerService = CleanerService;
//# sourceMappingURL=cleaner.service.js.map