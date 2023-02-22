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
const room_type_enum_1 = require("./enum/room-type.enum");
const room_type_entity_1 = require("../room-type/entities/room-type.entity");
const room_status_enum_1 = require("../../common/enums/room-status.enum");
const functions_1 = require("../../common/utils/functions");
let AdminRoomService = class AdminRoomService {
    constructor(adminRoomRepository, cleaningHistoryRepository, roomtypeRepository, request) {
        this.adminRoomRepository = adminRoomRepository;
        this.cleaningHistoryRepository = cleaningHistoryRepository;
        this.roomtypeRepository = roomtypeRepository;
        this.request = request;
    }
    async create(createRoomDto) {
        const roomType = await this.roomtypeRepository.findById(new mongoose_2.Types.ObjectId(createRoomDto.roomType));
        if (roomType) {
            const user = this.request.user;
            createRoomDto.level = new mongoose_2.Types.ObjectId(createRoomDto.level);
            createRoomDto.roomType = roomType.title;
            createRoomDto.hotel = new mongoose_2.Types.ObjectId(createRoomDto.hotel);
            const createdResult = await this.adminRoomRepository.create(createRoomDto);
            return createdResult;
        }
        else {
            throw new common_1.NotFoundException("room type not found");
        }
    }
    async findAll(filter = {}) {
        const user = this.request.user;
        if (user.role == role_enum_1.ROLES.HOTELADMIN)
            filter['hotel'] = user._id;
        else if (user.hotel)
            filter['hotel'] = user.hotel._id;
        else
            return [];
        const rooms = await this.adminRoomRepository.aggregate([
            {
                $match: filter
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
    async startRoomCleaning(startCleaning) {
        const { roomId } = startCleaning;
        const user = this.request.user;
        let cleaner;
        if (user.role == role_enum_1.ROLES.CLEANER)
            cleaner = user._id;
        const room = await this.adminRoomRepository.findOne({ _id: roomId });
        if (room) {
            await this.adminRoomRepository.updateOne({ _id: roomId }, { cleaning_status: room_type_enum_1.CheckerRoomStatus.IN_PROGRESS });
            const cleaningHistory = await this.cleaningHistoryRepository.create({
                room: new mongoose_2.Types.ObjectId(room._id), cleaner: new mongoose_2.Types.ObjectId(cleaner),
                cleaningStartAt: new Date().toUTCString(),
                status: room_status_enum_1.ROOM_STATUS.IN_PROGRESS,
                checkerStatus: room_type_enum_1.CheckerRoomStatus.IN_PROGRESS
            });
            return {
                message: "cleaning history created",
                data: cleaningHistory
            };
        }
        else {
            throw new common_1.NotFoundException("invalid request");
        }
    }
    async updateCleaningStatus(updateCleaningStatus) {
        const { cleaningHistoryId, status } = updateCleaningStatus;
        const user = this.request.user;
        const cleaningHistory = await this.cleaningHistoryRepository.findById(new mongoose_2.Types.ObjectId(cleaningHistoryId));
        if (cleaningHistory && status !== room_status_enum_1.ROOM_STATUS.START) {
            cleaningHistory.set({ status, cleaningEndAt: new Date().toUTCString(), checkerStatus: room_type_enum_1.CheckerRoomStatus.IN_PROGRESS });
            await cleaningHistory.save();
            return cleaningHistory;
        }
        else {
            throw new common_1.NotFoundException("invalid request");
        }
        return {
            message: "room hisstory updated"
        };
    }
    async setRoomStatus(setRoomStatusDto) {
        const { roomId, clean_status, occupation_status } = setRoomStatusDto;
        const user = this.request.user;
        let checker;
        if (user.role == role_enum_1.ROLES.CHECKER)
            checker = user._id;
        const room = await this.adminRoomRepository.findOne({ _id: roomId });
        if (room) {
            await this.adminRoomRepository.updateOne({ _id: roomId }, { cleaning_status: clean_status, occupation_status });
            await this.cleaningHistoryRepository.updateMany({ room: room._id, checker: null }, {
                checker: checker,
                checkerStatus: clean_status
            });
        }
        else {
            throw new common_1.NotFoundException("invalid request");
        }
        return {
            message: "set room status successfully"
        };
    }
    async search(search) {
        const user = this.request.user;
        let hotel;
        if (user.role == role_enum_1.ROLES.HOTELADMIN)
            hotel = new mongoose_2.Types.ObjectId(user._id);
        else
            hotel = user.hotel._id;
        const rooms = await this.adminRoomRepository.find({
            hotel: hotel,
            $or: [
                { roomType: { "$in": search.type } },
                { cleaning_status: { "$in": search.cleaning_status || [] } },
                { occupation_status: { "$in": search.occupation_status || [] } }
            ]
        });
        return rooms;
    }
    async setMistakes(mistakeDto, files) {
        const user = this.request.user;
        let checker;
        if (user.role == role_enum_1.ROLES.CHECKER)
            checker = user._id;
        else
            throw new common_1.NotFoundException("invalid request");
        const room = await this.adminRoomRepository.findOne({ _id: mistakeDto.roomId });
        const newFile = (0, functions_1.getObjectFiles)(files);
        const newMistakes = {
            roomIsNotVacuumed: {
                status: mistakeDto.roomIsNotVacuumedStatus && (mistakeDto.roomIsNotVacuumedStatus).toLowerCase() === "true",
                text: "",
                photos: newFile.roomIsNotVacuumedPhotos
            },
            roomHasStrongStainsThatCanNotBeCleanedByUs: {
                status: mistakeDto.roomHasStrongStainsThatCanNotBeCleanedByUsStatus && (mistakeDto.roomHasStrongStainsThatCanNotBeCleanedByUsStatus).toLowerCase() === "true",
                text: "",
                photos: newFile.roomHasStrongStainsThatCanNotBeCleanedByUsPhotos
            },
            damageCausedByGuests: {
                status: mistakeDto.damageCausedByGuestsStatus && (mistakeDto.damageCausedByGuestsStatus).toLowerCase() === "true",
                text: "",
                photos: newFile.damageCausedByGuestsPhotos
            },
            report: {
                status: mistakeDto.reportStatus && (mistakeDto.reportStatus).toLowerCase() === "true",
                text: "",
                photos: newFile.reportPhotos
            }
        };
        if (room) {
            const cleaningStatus = await this.cleaningHistoryRepository.updateMany({ room: mistakeDto.roomId, checker: null }, {
                mistakes: newMistakes,
            });
            return cleaningStatus;
        }
        else {
            throw new common_1.NotFoundException("invalid request");
        }
    }
    async createRoomReport() {
        const user = this.request.user;
        const rooms = await this.adminRoomRepository.find({ hotel: user._id });
        const roomIds = rooms.map((room) => room._id);
        const roomHistories = (await this.cleaningHistoryRepository.find({ room: { "$in": roomIds } }).populate('cleaner')
            .populate({
            path: "room",
            populate: {
                path: "hotel"
            }
        }).lean()).filter((history) => history.cleaner).filter((history) => history.room);
        const cleanersUsed = roomHistories.map(item => (item.cleaner._id).toString())
            .filter((value, index, self) => self.indexOf(value) === index);
        const roomsUsed = roomHistories.map(item => (item.room._id).toString())
            .filter((value, index, self) => self.indexOf(value) === index);
        const roomsCleaned = roomHistories.filter((room) => room.checkerStatus === room_type_enum_1.CheckerRoomStatus.Cleaned);
        const roomsInProgress = roomHistories.filter((room) => room.checkerStatus === room_type_enum_1.CheckerRoomStatus.IN_PROGRESS);
        const roomsNotCleaned = roomHistories.filter((room) => room.checkerStatus === room_type_enum_1.CheckerRoomStatus.NotCleaned);
        const roomDamaged = roomHistories.filter((room) => room.checkerStatus === room_type_enum_1.CheckerRoomStatus.Damaged);
        let cleanersReport = [];
        let roomsReport = [];
        for (let i = 0; i < cleanersUsed.length; i++) {
            const cleaner = cleanersUsed[i];
            const cleanerReport = roomHistories.filter((report) => (report.cleaner._id).toString() === (cleaner).toString());
            const rooms = cleanerReport.map((report) => {
                const room = report.room;
                const { extraAdult, extraChild } = room.hotel.price || {};
                const roomReport = room.report;
                let extra = false;
                let roomPrice = room.price;
                if (room.report.indexOf(room_type_enum_1.RoomStatus.ExtraBedNormal) !== -1) {
                    roomPrice += extraAdult;
                    extra = true;
                }
                if (room.report.indexOf(room_type_enum_1.RoomStatus.ExtraBedChild) !== -1) {
                    roomPrice += extraChild;
                    extra = true;
                }
                return Object.assign(Object.assign({}, report.room), { mistakes: report.mistakes, price: roomPrice, extra });
            });
            const extra = rooms.filter((room) => room.extra);
            const mistakesCount = rooms.reduce((partialSum, room) => {
                if (room.mistakes && room.mistakes.roomIsNotVacuumed && room.mistakes.roomIsNotVacuumed.status) {
                    partialSum += 1;
                }
                if (room.mistakes && room.mistakes.roomIsNotVacuumed && room.mistakes.roomIsNotVacuumed.status) {
                    partialSum += 1;
                }
                if (room.mistakes && room.mistakes.report && room.mistakes.report.status) {
                    partialSum += 1;
                }
                if (room.mistakes && room.mistakes.roomHasStrongStainsThatCanNotBeCleanedByUs && room.mistakes.roomHasStrongStainsThatCanNotBeCleanedByUs.status) {
                    partialSum += 1;
                }
                if (room.mistakes && room.mistakes.damageCausedByGuests && room.mistakes.damageCausedByGuests.status) {
                    partialSum += 1;
                }
                return partialSum;
            }, 0);
            let data = Object.assign(Object.assign({}, cleanerReport[0].cleaner), { extra: extra.length, mistakesCount, rooms });
            cleanersReport.push(data);
        }
        for (let i = 0; i < roomsUsed.length; i++) {
            const room = roomsUsed[i];
            const roomReport = roomHistories.filter((report) => (report.room._id).toString() === (room).toString());
            const cleaners = roomReport.map((report) => (Object.assign(Object.assign({}, report.cleaner), { mistakes: report.mistakes, price: report.price })));
            const mistakesCount = cleaners.reduce((partialSum, room) => {
                if (room.mistakes && room.mistakes.roomIsNotVacuumed && room.mistakes.roomIsNotVacuumed.status) {
                    partialSum += 1;
                }
                if (room.mistakes && room.mistakes.roomIsNotVacuumed && room.mistakes.roomIsNotVacuumed.status) {
                    partialSum += 1;
                }
                if (room.mistakes && room.mistakes.report && room.mistakes.report.status) {
                    partialSum += 1;
                }
                if (room.mistakes && room.mistakes.roomHasStrongStainsThatCanNotBeCleanedByUs && room.mistakes.roomHasStrongStainsThatCanNotBeCleanedByUs.status) {
                    partialSum += 1;
                }
                if (room.mistakes && room.mistakes.damageCausedByGuests && room.mistakes.damageCausedByGuests.status) {
                    partialSum += 1;
                }
                return partialSum;
            }, 0);
            let data = Object.assign(Object.assign({}, roomReport[0].room), { mistakesCount, cleaners });
            roomsReport.push(data);
        }
        return {
            cleanersUsed: cleanersUsed.length,
            roomsCleaned: roomsCleaned.length,
            roomsInProgress: roomsInProgress.length,
            roomsNotCleaned: roomsNotCleaned.length,
            roomsDamaged: roomDamaged.length,
            notDamaged: roomHistories.length - roomDamaged.length,
            cleanersReport,
            roomsReport
        };
    }
};
AdminRoomService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, mongoose_1.InjectModel)(room_entity_1.Room.name)),
    __param(1, (0, mongoose_1.InjectModel)("cleaninghistories")),
    __param(2, (0, mongoose_1.InjectModel)(room_type_entity_1.RoomType.name)),
    __param(3, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model, Object])
], AdminRoomService);
exports.AdminRoomService = AdminRoomService;
//# sourceMappingURL=room.service.js.map