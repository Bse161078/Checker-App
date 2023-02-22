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
exports.SearchRoom = exports.SetRoomStatus = exports.UpdateCleaningStatus = exports.StartCleaningDto = exports.SendAlertDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const room_type_enum_1 = require("../enum/room-type.enum");
const class_validator_1 = require("class-validator");
const room_status_enum_1 = require("../../../common/enums/room-status.enum");
class SendAlertDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SendAlertDto.prototype, "roomID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(room_type_enum_1.RoomStatus, { each: true }),
    __metadata("design:type", Object)
], SendAlertDto.prototype, "status", void 0);
exports.SendAlertDto = SendAlertDto;
class StartCleaningDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StartCleaningDto.prototype, "roomId", void 0);
exports.StartCleaningDto = StartCleaningDto;
class UpdateCleaningStatus {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCleaningStatus.prototype, "cleaningHistoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(room_status_enum_1.ROOM_STATUS),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], UpdateCleaningStatus.prototype, "status", void 0);
exports.UpdateCleaningStatus = UpdateCleaningStatus;
class SetRoomStatus {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SetRoomStatus.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: "string", enum: room_type_enum_1.CheckerRoomStatus }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(room_type_enum_1.CheckerRoomStatus),
    __metadata("design:type", String)
], SetRoomStatus.prototype, "clean_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: "string", enum: room_type_enum_1.RoomOccupationStatus }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(room_type_enum_1.RoomOccupationStatus),
    __metadata("design:type", String)
], SetRoomStatus.prototype, "occupation_status", void 0);
exports.SetRoomStatus = SetRoomStatus;
class SearchRoom {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Object)
], SearchRoom.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Object)
], SearchRoom.prototype, "cleaning_status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Object)
], SearchRoom.prototype, "occupation_status", void 0);
exports.SearchRoom = SearchRoom;
//# sourceMappingURL=send-alert.dto.js.map