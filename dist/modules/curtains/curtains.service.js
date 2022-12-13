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
exports.CurtainsService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const functions_1 = require("../../common/utils/functions");
const curtains_entity_1 = require("./entities/curtains.entity");
let CurtainsService = class CurtainsService {
    constructor(request, curtainRepository) {
        this.request = request;
        this.curtainRepository = curtainRepository;
    }
    async create(createCurtainDto, files) {
        const { hotel, _id: checker } = this.request.user;
        const curtain = await this.findOneCurtain(createCurtainDto.room);
        createCurtainDto = (0, functions_1.parseValue)(createCurtainDto);
        const newFile = (0, functions_1.getObjectFiles)(files);
        const newDto = {
            topQuestion: {
                value: createCurtainDto.topQuestionStatus,
                samplePhoto: newFile.samplePhotoTopQuestion,
            },
            comments: {
                curtainsNotClean: {
                    status: createCurtainDto.curtainsNotCleanStatus,
                    photos: newFile.curtainsNotCleanPhotos
                },
                curtainsHaveWrinkles: {
                    status: createCurtainDto.curtainsHaveWrinklesStatus,
                    photos: newFile.curtainsHaveWrinklesPhotos,
                }
            },
            checker,
            room: createCurtainDto.room,
            hotel: new mongoose_2.Types.ObjectId(hotel),
            damage: {
                text: createCurtainDto.DamageReportText,
                photos: newFile.DamageReportPhotos
            }
        };
        if (curtain) {
            const updatedResult = await this.curtainRepository.updateOne({ _id: curtain._id }, { $set: newDto });
        }
        else {
            const createdResult = await this.curtainRepository.create(newDto);
        }
        return true;
    }
    async getCurtainStatus(room) {
        const curtain = await this.findOneCurtain(room);
        if (curtain)
            return curtain;
        throw new common_1.NotFoundException("still not fill curtain status");
    }
    async findOneCurtain(room) {
        const curtain = await this.curtainRepository.findOne({ room });
        return curtain;
    }
};
CurtainsService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __param(1, (0, mongoose_1.InjectModel)(curtains_entity_1.Curtain.name)),
    __metadata("design:paramtypes", [Object, mongoose_2.Model])
], CurtainsService);
exports.CurtainsService = CurtainsService;
//# sourceMappingURL=curtains.service.js.map