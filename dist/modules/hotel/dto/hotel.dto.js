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
exports.UpdateHotelLogoDto = exports.CreateHotelReceptionDto = exports.CreateHotelCheckerDto = exports.CreateHotelCleanerDto = exports.HotelDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
const role_enum_1 = require("../../../common/enums/role.enum");
class HotelDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], HotelDto.prototype, "hotelId", void 0);
exports.HotelDto = HotelDto;
class CreateHotelCleanerDto {
    constructor() {
        this.role = role_enum_1.ROLES.CLEANER;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: "string" }),
    (0, class_validator_1.Length)(3),
    __metadata("design:type", String)
], CreateHotelCleanerDto.prototype, "fullname", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "string", format: "binary", }),
    __metadata("design:type", String)
], CreateHotelCleanerDto.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.Length)(3),
    __metadata("design:type", String)
], CreateHotelCleanerDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.Length)(6, 16),
    __metadata("design:type", String)
], CreateHotelCleanerDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: "integer" }),
    __metadata("design:type", Number)
], CreateHotelCleanerDto.prototype, "salaryPerRoom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: "integer" }),
    __metadata("design:type", Number)
], CreateHotelCleanerDto.prototype, "roomCountForCleanEachDay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: "string" }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CreateHotelCleanerDto.prototype, "hotel", void 0);
exports.CreateHotelCleanerDto = CreateHotelCleanerDto;
class CreateHotelCheckerDto {
    constructor() {
        this.role = role_enum_1.ROLES.CHECKER;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: "string" }),
    (0, class_validator_1.Length)(3),
    __metadata("design:type", String)
], CreateHotelCheckerDto.prototype, "fullname", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "string", format: "binary", }),
    __metadata("design:type", String)
], CreateHotelCheckerDto.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.Length)(3),
    __metadata("design:type", String)
], CreateHotelCheckerDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.Length)(6, 16),
    __metadata("design:type", String)
], CreateHotelCheckerDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: "string" }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CreateHotelCheckerDto.prototype, "hotel", void 0);
exports.CreateHotelCheckerDto = CreateHotelCheckerDto;
class CreateHotelReceptionDto {
    constructor() {
        this.role = role_enum_1.ROLES.HOTELRECEPTION;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: "string" }),
    (0, class_validator_1.Length)(3),
    __metadata("design:type", String)
], CreateHotelReceptionDto.prototype, "fullname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.Length)(3),
    __metadata("design:type", String)
], CreateHotelReceptionDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.Length)(6, 16),
    __metadata("design:type", String)
], CreateHotelReceptionDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: "string" }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CreateHotelReceptionDto.prototype, "hotel", void 0);
exports.CreateHotelReceptionDto = CreateHotelReceptionDto;
class UpdateHotelLogoDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "string", format: "binary", }),
    __metadata("design:type", String)
], UpdateHotelLogoDto.prototype, "logo", void 0);
exports.UpdateHotelLogoDto = UpdateHotelLogoDto;
//# sourceMappingURL=hotel.dto.js.map