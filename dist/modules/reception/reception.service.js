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
exports.ReceptionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const room_entity_1 = require("../room/entities/room.entity");
const mongoose_2 = require("mongoose");
const core_1 = require("@nestjs/core");
const cleaner_entity_1 = require("../cleaner/entities/cleaner.entity");
let ReceptionService = class ReceptionService {
    constructor(roomRepository, cleanerRepository, request) {
        this.roomRepository = roomRepository;
        this.cleanerRepository = cleanerRepository;
        this.request = request;
    }
    create(createReceptionDto) {
        return 'This action adds a new reception';
    }
    async getRooms() {
        const user = this.request.user;
        const hotel = user.hotel;
        const rooms = await this.roomRepository.find({ hotel }, { status: 1, report: 1, name: 1, hotel: 1 });
        return rooms;
    }
    async getCleaners(id) {
        const user = this.request.user;
        const hotel = user.hotel;
    }
};
ReceptionService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, mongoose_1.InjectModel)(room_entity_1.Room.name)),
    __param(1, (0, mongoose_1.InjectModel)(cleaner_entity_1.Cleaner.name)),
    __param(2, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model, Object])
], ReceptionService);
exports.ReceptionService = ReceptionService;
//# sourceMappingURL=reception.service.js.map