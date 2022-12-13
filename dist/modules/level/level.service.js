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
exports.LevelService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const room_entity_1 = require("../room/entities/room.entity");
const user_entity_1 = require("../user/entities/user.entity");
const level_entity_1 = require("./entities/level.entity");
let LevelService = class LevelService {
    constructor(adminLevelRepository, adminRoomRepository, userRepository, request) {
        this.adminLevelRepository = adminLevelRepository;
        this.adminRoomRepository = adminRoomRepository;
        this.userRepository = userRepository;
        this.request = request;
    }
    async create(createLevelDto, userID) {
        const levelDto = Object.assign(createLevelDto, { hotel: new mongoose_2.Types.ObjectId(userID) });
        const level = await this.adminLevelRepository.create(levelDto);
        return level;
    }
    async findAll(filter = {}) {
        const user = this.request.user._id;
        return await this.adminLevelRepository.aggregate([
            { $match: filter },
            {
                $lookup: {
                    from: "users",
                    foreignField: "_id",
                    localField: "hotel",
                    as: "hotel"
                }
            },
            { $unwind: "$hotel" },
            {
                $project: {
                    "hotel.password": 0,
                    "hotel.phones": 0,
                    "hotel.accessToken": 0,
                    "hotel.__v": 0,
                }
            }
        ]);
    }
    async findOne(id) {
        var _a;
        const level = (_a = (await this.findAll({ _id: new mongoose_2.Types.ObjectId(id) }))) === null || _a === void 0 ? void 0 : _a[0];
        if (!level)
            throw new common_1.NotFoundException("Not found any level document");
        return level;
    }
    async update(id, updateLevelDto) {
        const level = await this.findOne(id);
        const user = this.request.user;
        if (user._id.toString() != level.hotel._id.toString())
            throw new common_1.ForbiddenException("you're not this level maker");
        const updateLevelResult = await this.adminLevelRepository.updateOne({ _id: id }, { $set: updateLevelDto });
        if (updateLevelResult.modifiedCount == 0)
            throw new common_1.BadRequestException("updated failed");
        return updateLevelResult;
    }
    async remove(id) {
        const level = await this.findOne(id);
        const user = this.request.user;
        if (user._id.toString() != level.hotel._id.toString())
            throw new common_1.ForbiddenException("you're not this level maker");
        const deletedResult = await this.adminLevelRepository.deleteOne({ _id: id });
        if (deletedResult.deletedCount == 0)
            throw new common_1.BadRequestException("deleted was failed");
        await this.adminRoomRepository.updateMany({ level: id }, { $set: { level: undefined } });
        return true;
    }
};
LevelService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, mongoose_1.InjectModel)(level_entity_1.Level.name)),
    __param(1, (0, mongoose_1.InjectModel)(room_entity_1.Room.name)),
    __param(2, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __param(3, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model, Object])
], LevelService);
exports.LevelService = LevelService;
//# sourceMappingURL=level.service.js.map