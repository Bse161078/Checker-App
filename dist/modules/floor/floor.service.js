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
exports.FloorService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const functions_1 = require("../../common/utils/functions");
const floor_entity_1 = require("./entities/floor.entity");
let FloorService = class FloorService {
    constructor(request, floorRepository) {
        this.request = request;
        this.floorRepository = floorRepository;
    }
    async create(createFloorDto, files) {
        const { hotel, _id: checker } = this.request.user;
        const floor = await this.findOneFloor(createFloorDto.room);
        createFloorDto = (0, functions_1.parseValue)(createFloorDto);
        const newFile = (0, functions_1.getObjectFiles)(files);
        const newDto = {
            topQuestion: {
                value: createFloorDto.topQuestionStatus,
                samplePhoto: newFile.samplePhotoTopQuestion,
            },
            comments: {
                roomIsVacuumed: {
                    status: createFloorDto.roomIsVacuumedStatus,
                    photos: newFile.roomIsVacuumedPhotos
                },
                roomIsNotVacuumed: {
                    status: createFloorDto.roomIsNotVacuumedStatus,
                    photos: newFile.roomIsNotVacuumedPhotos
                },
                roomHasStrongStainsThatCanNotBeCleanedByUs: {
                    status: createFloorDto.roomHasStrongStainsThatCanNotBeCleanedByUsStatus,
                    photos: newFile.roomHasStrongStainsThatCanNotBeCleanedByUsPhotos,
                },
                DamageCausedByGuests: {
                    status: createFloorDto.DamageCausedByGuestsStatus,
                    photos: newFile.DamageCausedByGuestsPhotos,
                }
            },
            checker,
            hotel: new mongoose_2.Types.ObjectId(hotel),
            room: createFloorDto.room,
            damage: {
                text: createFloorDto.DamageReportText,
                photos: newFile.DamageReportPhotos
            }
        };
        if (floor) {
            const updatedResult = await this.floorRepository.updateOne({ _id: floor._id }, { $set: newDto });
        }
        else {
            const createdResult = await this.floorRepository.create(newDto);
        }
        return true;
    }
    async getFloorStatus(room) {
        const floor = await this.findOneFloor(room);
        if (floor)
            return floor;
        throw new common_1.NotFoundException("still not fill floor status");
    }
    async findOneFloor(room) {
        const floor = await this.floorRepository.findOne({ room });
        return floor;
    }
};
FloorService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __param(1, (0, mongoose_1.InjectModel)(floor_entity_1.Floor.name)),
    __metadata("design:paramtypes", [Object, mongoose_2.Model])
], FloorService);
exports.FloorService = FloorService;
//# sourceMappingURL=floor.service.js.map