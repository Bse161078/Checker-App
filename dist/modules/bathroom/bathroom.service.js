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
exports.BathroomService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const functions_1 = require("../../common/utils/functions");
const bathroom_entity_1 = require("./entities/bathroom.entity");
let BathroomService = class BathroomService {
    constructor(request, bathroomRepository) {
        this.request = request;
        this.bathroomRepository = bathroomRepository;
    }
    async create(createBathroomDto, files) {
        const { hotel, _id: checker } = this.request.user;
        const { room } = createBathroomDto;
        const bathroom = await this.findOneBathRoom(room);
        createBathroomDto = (0, functions_1.parseValue)(createBathroomDto);
        const newFile = (0, functions_1.getObjectFiles)(files);
        const newDto = {
            topQuestion: {
                value: createBathroomDto.topQuestionStatus,
                samplePhoto: newFile.samplePhotoTopQuestion,
            },
            comments: {
                tilesAreNotMopped: {
                    status: createBathroomDto.tilesAreNotMoppedStatus,
                    photos: newFile.tilesAreNotMoppedPhotos
                },
                toiletIsNotWiped: {
                    status: createBathroomDto.toiletIsNotWipedStatus,
                    photos: newFile.toiletIsNotWipedPhotos,
                },
                thereIsDirtInTheShowe: {
                    status: createBathroomDto.thereIsDirtInTheShoweStatus,
                    photos: newFile.thereIsDirtInTheShowePhotos,
                },
                shelvesAreNotWiped: {
                    status: createBathroomDto.shelvesAreNotWipedStatus,
                    photos: newFile.shelvesAreNotWipedPhotos,
                },
                traysAreNotFilled: {
                    status: createBathroomDto.traysAreNotFilledStatus,
                    photos: newFile.traysAreNotFilledPhotos,
                }
            },
            checker,
            room: createBathroomDto.room,
            hotel: new mongoose_2.Types.ObjectId(hotel),
            damage: {
                text: createBathroomDto.DamageReportText,
                photos: newFile.DamageReportPhotos
            }
        };
        if (bathroom) {
            await this.bathroomRepository.updateOne({ _id: bathroom._id }, { $set: newDto });
        }
        else {
            await this.bathroomRepository.create(newDto);
        }
        return true;
    }
    async getBathRoomStatus(room) {
        const bathroom = await this.findOneBathRoom(room);
        if (bathroom)
            return bathroom;
        throw new common_1.NotFoundException("still not fill bathroom status");
    }
    async findOneBathRoom(room) {
        const bathroom = await this.bathroomRepository.findOne({ room });
        return bathroom;
    }
};
BathroomService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __param(1, (0, mongoose_1.InjectModel)(bathroom_entity_1.BathRoom.name)),
    __metadata("design:paramtypes", [Object, mongoose_2.Model])
], BathroomService);
exports.BathroomService = BathroomService;
//# sourceMappingURL=bathroom.service.js.map