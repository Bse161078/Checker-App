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
exports.ShelvesService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const functions_1 = require("../../common/utils/functions");
const shelves_entity_1 = require("./entities/shelves.entity");
let ShelvesService = class ShelvesService {
    constructor(request, shelvesRepository) {
        this.request = request;
        this.shelvesRepository = shelvesRepository;
    }
    async create(createShelvesDto, files) {
        const { hotel, _id: checker } = this.request.user;
        const shelves = await this.findOneShelves(createShelvesDto.room);
        createShelvesDto = (0, functions_1.parseValue)(createShelvesDto);
        const newFile = (0, functions_1.getObjectFiles)(files);
        const newDto = {
            topQuestion: {
                value: createShelvesDto.topQuestionStatus,
                samplePhoto: newFile.samplePhotoTopQuestion,
            },
            comments: {
                wiped: {
                    status: createShelvesDto.tableNotCleanStatus,
                    photos: newFile.tableNotCleanPhotos
                },
                tableNotClean: {
                    status: createShelvesDto.tableNotCleanStatus,
                    photos: newFile.tableNotCleanPhotos
                },
                sideTableNotClean: {
                    status: createShelvesDto.tableNotCleanStatus,
                    photos: newFile.tableNotCleanPhotos
                },
                tv: {
                    status: createShelvesDto.tableNotCleanStatus,
                    photos: newFile.tableNotCleanPhotos
                },
                window: {
                    status: createShelvesDto.tableNotCleanStatus,
                    photos: newFile.tableNotCleanPhotos
                },
                tvStandNotClean: {
                    status: createShelvesDto.tvStandNotCleanStatus,
                    photos: newFile.tvStandNotCleanPhotos,
                },
                cabinetTopAndInsideSurfacesNotClean: {
                    status: createShelvesDto.cabinetTopAndInsideSurfacesNotCleanStatus,
                    photos: newFile.cabinetTopAndInsideSurfacesNotCleanPhotos,
                },
                windowSillNotClean: {
                    status: createShelvesDto.windowSillNotCleanStatus,
                    photos: newFile.windowSillNotCleanPhotos,
                },
                BrochuresNotNeatlyAndSortedInTheirPlace: {
                    status: createShelvesDto.BrochuresNotNeatlyAndSortedInTheirPlaceStatus,
                    photos: newFile.BrochuresNotNeatlyAndSortedInTheirPlacePhotos,
                }
            },
            checker,
            hotel: new mongoose_2.Types.ObjectId(hotel),
            room: createShelvesDto.room,
            damage: {
                text: createShelvesDto.DamageReportText,
                photos: newFile.DamageReportPhotos
            }
        };
        if (shelves) {
            const updatedResult = await this.shelvesRepository.updateOne({ _id: shelves._id }, { $set: newDto });
        }
        else {
            const createdResult = await this.shelvesRepository.create(newDto);
        }
        return true;
    }
    async getShelvesStatus(room) {
        const shelves = await this.findOneShelves(room);
        if (shelves)
            return shelves;
        throw new common_1.NotFoundException("still not fill shelves status");
    }
    async findOneShelves(room) {
        const shelves = await this.shelvesRepository.findOne({ room });
        return shelves;
    }
};
ShelvesService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __param(1, (0, mongoose_1.InjectModel)(shelves_entity_1.Shelves.name)),
    __metadata("design:paramtypes", [Object, mongoose_2.Model])
], ShelvesService);
exports.ShelvesService = ShelvesService;
//# sourceMappingURL=shelves.service.js.map