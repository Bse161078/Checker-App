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
exports.RoomTypeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const room_type_entity_1 = require("./entities/room-type.entity");
const mongoose_2 = require("mongoose");
const core_1 = require("@nestjs/core");
const functions_1 = require("../../common/utils/functions");
const room_entity_1 = require("../room/entities/room.entity");
const role_enum_1 = require("../../common/enums/role.enum");
let RoomTypeService = class RoomTypeService {
    constructor(roomtypeRepository, roomRepository, request) {
        this.roomtypeRepository = roomtypeRepository;
        this.roomRepository = roomRepository;
        this.request = request;
    }
    async create(createRoomTypeDto) {
        const user = this.request.user;
        const { title } = createRoomTypeDto;
        const hotel = new mongoose_2.Types.ObjectId(user._id);
        const createdResult = await this.roomtypeRepository.create({
            title,
            hotel
        });
        return createdResult;
    }
    async findAll() {
        const user = this.request.user;
        const filter = {};
        if (user.role == role_enum_1.ROLES.HOTELADMIN)
            filter['hotel'] = user._id;
        else
            filter['hotel'] = user.hotel;
        if (!filter.hotel)
            return [];
        const roomTypes = await this.roomtypeRepository.find(filter).populate({ path: "hotel", select: { username: 1 } });
        return roomTypes;
    }
    async findOne(_id) {
        const user = this.request.user;
        const roomType = await this.roomtypeRepository.findOne({ _id, hotel: user._id });
        if (!roomType)
            throw new common_1.NotFoundException("not found any room type");
        return roomType;
    }
    async update(id, updateRoomTypeDto) {
        const roomType = await this.findOne(id);
        updateRoomTypeDto = (0, functions_1.removeEmptyFieldsObject)(updateRoomTypeDto);
        const updatedResult = await this.roomtypeRepository.updateOne({ _id: id }, {
            $set: updateRoomTypeDto
        });
        if (updatedResult.modifiedCount)
            throw new common_1.BadRequestException("No new changes were registered");
        return updatedResult;
    }
    async remove(id) {
        const roomType = await this.findOne(id);
        const deletedResult = await this.roomtypeRepository.deleteOne({ _id: id });
        if (deletedResult.deletedCount == 0)
            throw new common_1.BadRequestException("deleted room type failed");
        await this.roomRepository.updateMany({ roomType: roomType._id }, { $unset: { roomType: "" } });
        return true;
    }
};
RoomTypeService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, mongoose_1.InjectModel)(room_type_entity_1.RoomType.name)),
    __param(1, (0, mongoose_1.InjectModel)(room_entity_1.Room.name)),
    __param(2, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model, Object])
], RoomTypeService);
exports.RoomTypeService = RoomTypeService;
//# sourceMappingURL=room-type.service.js.map