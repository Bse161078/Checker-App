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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("../user/entities/user.entity");
const mongoose_2 = require("mongoose");
const role_enum_1 = require("../../common/enums/role.enum");
const auth_service_1 = require("../auth/services/auth.service");
let CompanyService = class CompanyService {
    constructor(userRepository, authService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }
    async create(createCompanyDto) {
        createCompanyDto.password = this.authService.hashPassword(createCompanyDto.password);
        createCompanyDto.role = role_enum_1.ROLES.COMPANYADMIN;
        let company = null;
        if (createCompanyDto.username)
            company = await this.userRepository.findOne({ username: createCompanyDto.username });
        if (company)
            throw new common_1.BadRequestException("username already exists");
        if (createCompanyDto.email)
            company = await this.userRepository.findOne({ email: createCompanyDto.email });
        if (company)
            throw new common_1.BadRequestException("email already exists");
        const createdResult = await this.userRepository.create(createCompanyDto);
        return createdResult;
    }
    async createCleaner(createCleanerDto) {
        createCleanerDto.hotel = new mongoose_2.Types.ObjectId(createCleanerDto.hotel);
        createCleanerDto.password = this.authService.hashPassword(createCleanerDto.password);
        createCleanerDto.role = role_enum_1.ROLES.CLEANER;
        const cleaner = await this.userRepository.create(createCleanerDto);
        return cleaner;
    }
    async createChecker(createCheckerDto) {
        createCheckerDto.hotel = new mongoose_2.Types.ObjectId(createCheckerDto.hotel);
        createCheckerDto.company = new mongoose_2.Types.ObjectId(createCheckerDto.company);
        createCheckerDto.password = this.authService.hashPassword(createCheckerDto.password);
        createCheckerDto.role = role_enum_1.ROLES.CHECKER;
        const cleaner = await this.userRepository.create(createCheckerDto);
        return cleaner;
    }
    async findAll() {
        const companies = await this.userRepository.find({ role: role_enum_1.ROLES.COMPANYADMIN });
        return companies;
    }
    async findOne(id) {
        const company = await this.userRepository.findOne({ _id: id, role: role_enum_1.ROLES.COMPANYADMIN });
        if (!company)
            throw new common_1.NotFoundException("not found any company");
        return company;
    }
    async remove(id) {
        const company = await this.findOne(id);
        const removedResult = await this.userRepository.deleteOne({ _id: id });
        await this.userRepository.updateMany({ company: id }, {
            $unset: { company: "" }
        });
        return true;
    }
};
CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        auth_service_1.AuthService])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map