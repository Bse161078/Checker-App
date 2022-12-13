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
exports.CheckerService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const role_enum_1 = require("../../common/enums/role.enum");
const functions_1 = require("../../common/utils/functions");
const auth_service_1 = require("../auth/services/auth.service");
const user_entity_1 = require("../user/entities/user.entity");
let CheckerService = class CheckerService {
    constructor(userRepository, request, authService) {
        this.userRepository = userRepository;
        this.request = request;
        this.authService = authService;
    }
    async create(createCheckerDto) {
        const user = this.request.user;
        if (user.role == role_enum_1.ADMIN_ROLES.COMPANYADMIN) {
            createCheckerDto.company = user._id;
            const { hotelID } = createCheckerDto;
            if (hotelID)
                createCheckerDto.hotel = new mongoose_2.Types.ObjectId(hotelID);
        }
        if (user.role == role_enum_1.ADMIN_ROLES.HOTELADMIN)
            createCheckerDto.hotel = user._id;
        createCheckerDto.password = this.authService.hashPassword(createCheckerDto.password);
        createCheckerDto.role = role_enum_1.ROLES.CHECKER;
        const checker = await this.userRepository.create(createCheckerDto);
        return checker;
    }
    async findAll() {
        const user = this.request.user;
        let filter = { role: role_enum_1.ROLES.CHECKER };
        if (user.role == role_enum_1.ROLES.COMPANYADMIN) {
            filter['company'] = user._id;
        }
        else if (user.role == role_enum_1.ROLES.HOTELADMIN) {
            filter['hotel'] = user._id;
        }
        else if (user.role == role_enum_1.ROLES.SUPERADMIN) {
            filter = { role: role_enum_1.ROLES.CHECKER };
        }
        else {
            filter['hotel'] = user.hotel;
        }
        if (user.role != role_enum_1.ROLES.SUPERADMIN && Object.values(filter).length == 0)
            return [];
        const checkers = await this.userRepository.find(filter);
        return checkers;
    }
    async findOne(id) {
        const checkerID = new mongoose_2.Types.ObjectId(id);
        const checker = await this.userRepository.findOne({ _id: checkerID, role: role_enum_1.ROLES.CHECKER });
        if (checker)
            return checker;
        throw new common_1.NotFoundException("checker not found");
    }
    async update(id, updateCheckerDto) {
        const checker = await this.findOne(id);
        const newCheckerDto = (0, functions_1.removeEmptyFieldsObject)(updateCheckerDto);
        const updatedResult = await this.userRepository.updateOne({ _id: checker._id }, {
            $set: newCheckerDto
        });
        if (!!updatedResult.modifiedCount)
            return true;
        throw new common_1.BadRequestException("updated checker failed");
    }
    async remove(id) {
        const checker = await this.findOne(id);
        const deletedResult = await this.userRepository.deleteOne({ _id: checker._id });
        if (!!deletedResult.deletedCount)
            return true;
        throw new common_1.BadRequestException("deleted checker failed");
    }
};
CheckerService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __param(1, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [mongoose_2.Model, Object, auth_service_1.AuthService])
], CheckerService);
exports.CheckerService = CheckerService;
//# sourceMappingURL=checker.service.js.map