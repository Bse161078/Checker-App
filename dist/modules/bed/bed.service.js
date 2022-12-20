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
exports.BedService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const functions_1 = require("../../common/utils/functions");
const bed_entity_1 = require("./entities/bed.entity");
let BedService = class BedService {
    constructor(request, bedRepository) {
        this.request = request;
        this.bedRepository = bedRepository;
    }
    async create(createBedDto, files) {
        const { hotel, _id: checker } = this.request.user;
        const { room } = createBedDto;
        const bed = await this.findOneBed(room);
        createBedDto = (0, functions_1.parseValue)(createBedDto);
        const newFile = (0, functions_1.getObjectFiles)(files);
        const newDto = {
            topQuestion: {
                value: createBedDto.topQuestionStatus,
                samplePhoto: newFile.samplePhotoTopQuestion,
            },
            comments: {
                bedDoesNotLookFresh: {
                    status: createBedDto.bedDoesNotLookFreshStatus,
                    photos: newFile.bedDoesNotLookFreshPhotos
                },
                bedSheetInNotProperlyTightened: {
                    status: createBedDto.bedSheetInNotProperlyTightenedStatus,
                    photos: newFile.bedSheetInNotProperlyTightenedPhotos,
                },
                extraBed: {
                    status: createBedDto.extraBedStatus,
                    photos: newFile.extraBedPhotos,
                },
            },
            checker,
            hotel: new mongoose_2.Types.ObjectId(hotel),
            room: createBedDto.room,
            damage: {
                text: createBedDto.DamageReportText,
                photos: newFile.DamageReportPhotos
            }
        };
        if (bed) {
            await this.bedRepository.updateOne({ _id: bed._id }, { $set: newDto });
        }
        else {
            await this.bedRepository.create(newDto);
        }
        return true;
    }
    async getBedStatus(room) {
        const bed = await this.findOneBed(room);
        if (bed)
            return bed;
        throw new common_1.NotFoundException("still not fill bed status");
    }
    async findOneBed(room) {
        const bed = await this.bedRepository.findOne({ room });
        return bed;
    }
};
BedService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __param(1, (0, mongoose_1.InjectModel)(bed_entity_1.Bed.name)),
    __metadata("design:paramtypes", [Object, mongoose_2.Model])
], BedService);
exports.BedService = BedService;
//# sourceMappingURL=bed.service.js.map