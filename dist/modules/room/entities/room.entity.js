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
exports.RoomSchema = exports.Room = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const room_type_enum_1 = require("../enum/room-type.enum");
let Room = class Room {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Room.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Room.prototype, "name_de", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], enum: [room_type_enum_1.RoomStatus], default: [] }),
    __metadata("design:type", String)
], Room.prototype, "report", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: room_type_enum_1.CheckerRoomStatus, default: room_type_enum_1.CheckerRoomStatus.NotCleaned }),
    __metadata("design:type", String)
], Room.prototype, "cleaning_status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: room_type_enum_1.RoomOccupationStatus, default: room_type_enum_1.RoomOccupationStatus.Free }),
    __metadata("design:type", String)
], Room.prototype, "occupation_status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: "" }),
    __metadata("design:type", String)
], Room.prototype, "roomType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Room.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: 'Level' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Room.prototype, "level", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: 'User' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Room.prototype, "hotel", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: 'User' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Room.prototype, "cleaner", void 0);
Room = __decorate([
    (0, mongoose_1.Schema)()
], Room);
exports.Room = Room;
exports.RoomSchema = mongoose_1.SchemaFactory.createForClass(Room);
//# sourceMappingURL=room.entity.js.map