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
exports.AdminRoomService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const room_entity_1 = require("./entities/room.entity");
const core_1 = require("@nestjs/core");
const role_enum_1 = require("../../common/enums/role.enum");
let AdminRoomService = class AdminRoomService {
    constructor(adminRoomRepository, cleaningHistoryRepository, request) {
        this.adminRoomRepository = adminRoomRepository;
        this.cleaningHistoryRepository = cleaningHistoryRepository;
        this.request = request;
    }
    async create(createRoomDto) {
        const user = this.request.user;
        createRoomDto.level = new mongoose_2.Types.ObjectId(createRoomDto.level);
        if (user.hotel)
            createRoomDto.hotel = user.hotel;
        if (user.role == role_enum_1.ROLES.HOTELADMIN)
            createRoomDto.hotel = user._id;
        createRoomDto.roomType = new mongoose_2.Types.ObjectId(createRoomDto.roomType);
        const createdResult = await this.adminRoomRepository.create(createRoomDto);
        return createdResult;
    }
    async findAll(filter = {}) {
        const user = this.request.user;
        if (user.role == role_enum_1.ROLES.HOTELADMIN)
            filter['hotel'] = user._id;
        else if (user.hotel)
            filter['hotel'] = user.hotel;
        else
            return [];
        const rooms = await this.adminRoomRepository.aggregate([
            {
                $match: filter
            },
            {
                $lookup: {
                    from: "roomtypes",
                    foreignField: "_id",
                    localField: "roomType",
                    as: "roomType"
                },
            },
            {
                $lookup: {
                    from: "levels",
                    foreignField: "_id",
                    localField: "level",
                    as: "level"
                },
            },
            {
                $lookup: {
                    from: "bathrooms",
                    foreignField: "room",
                    localField: "_id",
                    as: "bathroom"
                },
            },
            {
                $lookup: {
                    from: "beds",
                    foreignField: "room",
                    localField: "_id",
                    as: "bed"
                },
            },
            {
                $lookup: {
                    from: "floors",
                    foreignField: "room",
                    localField: "_id",
                    as: "floor"
                },
            },
            {
                $lookup: {
                    from: "shelves",
                    foreignField: "room",
                    localField: "_id",
                    as: "floor"
                },
            },
            {
                $lookup: {
                    from: "curtains",
                    foreignField: "room",
                    localField: "_id",
                    as: "curtain"
                },
            },
            {
                $unwind: "$level"
            },
            {
                $unwind: {
                    path: "$roomType",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $unwind: {
                    path: "$bathroom",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $unwind: {
                    path: "$bed",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $unwind: {
                    path: "$floor",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $unwind: {
                    path: "$shelves",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $unwind: {
                    path: "$curtain",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    "level.__v": 0,
                    "level.hotel": 0,
                    "roomType.hotel": 0,
                    "roomType.__v": 0,
                    __v: 0
                }
            }
        ]);
        return rooms;
    }
    async findOne(id) {
        var _a;
        const room = (_a = (await this.findAll({ _id: new mongoose_2.Types.ObjectId(id) }))) === null || _a === void 0 ? void 0 : _a[0];
        if (!room)
            throw new common_1.NotFoundException("Not found any room ");
        return room;
    }
    async update(id, updateRoomDto) {
        const room = await this.findOne(id);
        const updatedResult = await this.adminRoomRepository.updateOne({ _id: id }, {
            $set: updateRoomDto
        });
        if (updatedResult.modifiedCount == 0)
            throw new common_1.BadRequestException("updated failed");
        return updatedResult;
    }
    async remove(id) {
        const deletedResult = await this.adminRoomRepository.deleteOne({ _id: id });
        if (deletedResult.deletedCount == 0)
            throw new common_1.BadRequestException("deleted was failed");
        return deletedResult;
    }
    async sendAlert(sendAlertDto) {
        const { roomID, status } = sendAlertDto;
        await this.adminRoomRepository.updateOne({ _id: roomID }, {
            $set: { report: status }
        });
        return {
            message: "set room report successfully"
        };
    }
    async setRoomStatus(setRoomStatusDto) {
        const { roomID, status } = setRoomStatusDto;
        const user = this.request.user;
        let checker;
        if (user.role == role_enum_1.ROLES.CHECKER)
            checker = user._id;
        const room = await this.adminRoomRepository.findOne({ _id: roomID });
        await this.adminRoomRepository.updateOne({ _id: roomID }, {
            $set: { status }
        });
        await this.cleaningHistoryRepository.updateOne({
            cleaner: room.cleaner,
            room: room._id,
            checkerStatus: "no-status"
        }, {
            $set: { checkerStatus: status, checker }
        });
        return {
            message: "set room status successfully"
        };
    }
};
AdminRoomService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, mongoose_1.InjectModel)(room_entity_1.Room.name)),
    __param(1, (0, mongoose_1.InjectModel)(room_entity_1.Room.name)),
    __param(2, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model, Object])
], AdminRoomService);
exports.AdminRoomService = AdminRoomService;
//# sourceMappingURL=room.service.js.map