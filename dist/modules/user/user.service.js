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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const functions_1 = require("../../common/utils/functions");
const user_entity_1 = require("./entities/user.entity");
const auth_service_1 = require("../auth/services/auth.service");
let UserService = class UserService {
    constructor(userRepository, authService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }
    async create(createUserDto) {
        const newObjectDto = (0, functions_1.removeEmptyFieldsObject)(createUserDto);
        await this.checkExistUser(newObjectDto);
        createUserDto.password = this.authService.hashPassword(createUserDto.password);
        createUserDto.hotel = createUserDto.hotel && new mongoose_2.Types.ObjectId(createUserDto.hotel);
        const user = await this.userRepository.create(createUserDto);
        return user;
    }
    async findAll() {
        return await this.userRepository.find({});
    }
    async findOne(id) {
        const user = await this.userRepository.findById(new mongoose_2.Types.ObjectId(id));
        if (!user)
            throw new common_1.NotFoundException("user not found ");
        return user;
    }
    async update(id, updateUserDto) {
        const user = await this.findOne(id);
        const updatedResult = await this.userRepository.updateOne({ _id: user._id }, {
            $set: updateUserDto
        });
        if (!!updatedResult.modifiedCount)
            return true;
        throw new common_1.BadRequestException("updated user failed");
    }
    async remove(id) {
        const user = await this.findOne(id);
        const deletedResult = await this.userRepository.deleteOne({ _id: user._id });
        if (!!deletedResult.deletedCount)
            return true;
        throw new common_1.BadRequestException("deleted user failed");
    }
    async checkExistUser(createUserDto) {
        let checkUser = await this.userRepository.findOne({ username: createUserDto.username });
        if (checkUser)
            throw new common_1.BadRequestException("username already exist");
        if (createUserDto.mobile)
            checkUser = await this.userRepository.findOne({ mobile: createUserDto.mobile });
        if (checkUser)
            throw new common_1.BadRequestException("mobile already exist");
        if (createUserDto.email)
            checkUser = await this.userRepository.findOne({ email: createUserDto.email });
        if (checkUser)
            throw new common_1.BadRequestException("email already exist");
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        auth_service_1.AuthService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map