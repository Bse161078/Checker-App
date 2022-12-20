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
exports.SetRoomStatus = exports.SendAlertDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const room_type_enum_1 = require("../enum/room-type.enum");
class SendAlertDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SendAlertDto.prototype, "roomID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: "string", enum: room_type_enum_1.RoomStatus }),
    __metadata("design:type", String)
], SendAlertDto.prototype, "status", void 0);
exports.SendAlertDto = SendAlertDto;
class SetRoomStatus {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SetRoomStatus.prototype, "roomID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: "string", enum: room_type_enum_1.CheckerRoomStatus }),
    __metadata("design:type", String)
], SetRoomStatus.prototype, "status", void 0);
exports.SetRoomStatus = SetRoomStatus;
//# sourceMappingURL=send-alert.dto.js.map