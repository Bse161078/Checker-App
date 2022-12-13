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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CleaningHistorySchema = exports.CleaningHistory = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const room_status_enum_1 = require("../../../common/enums/room-status.enum");
let CleaningHistory = class CleaningHistory {
};
__decorate([
    (0, mongoose_1.Prop)({ ref: "User" }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CleaningHistory.prototype, "cleaner", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CleaningHistory.prototype, "cleaningStartAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CleaningHistory.prototype, "cleaningEndAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: "Room" }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CleaningHistory.prototype, "room", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: "User" }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CleaningHistory.prototype, "checker", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: room_status_enum_1.ROOM_STATUS.PENDING }),
    __metadata("design:type", String)
], CleaningHistory.prototype, "status", void 0);
CleaningHistory = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], CleaningHistory);
exports.CleaningHistory = CleaningHistory;
exports.CleaningHistorySchema = mongoose_1.SchemaFactory.createForClass(CleaningHistory);
//# sourceMappingURL=cleaning-history.entity.js.map