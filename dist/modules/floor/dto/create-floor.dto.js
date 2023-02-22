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
exports.CreateFloorDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateFloorDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], CreateFloorDto.prototype, "roomIsVacuumedStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "array", items: { type: "string", format: "binary" } }),
    __metadata("design:type", Array)
], CreateFloorDto.prototype, "roomIsVacuumedPhotos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: false, type: "bool", }),
    __metadata("design:type", Boolean)
], CreateFloorDto.prototype, "topQuestionStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "array", items: { type: "string", format: "binary" } }),
    __metadata("design:type", Array)
], CreateFloorDto.prototype, "samplePhotoTopQuestion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], CreateFloorDto.prototype, "roomIsNotVacuumedStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "array", items: { type: "string", format: "binary" } }),
    __metadata("design:type", Array)
], CreateFloorDto.prototype, "roomIsNotVacuumedPhotos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], CreateFloorDto.prototype, "roomHasStrongStainsThatCanNotBeCleanedByUsStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "array", items: { type: "string", format: "binary" } }),
    __metadata("design:type", Array)
], CreateFloorDto.prototype, "roomHasStrongStainsThatCanNotBeCleanedByUsPhotos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], CreateFloorDto.prototype, "DamageCausedByGuestsStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "array", items: { type: "string", format: "binary" } }),
    __metadata("design:type", Array)
], CreateFloorDto.prototype, "DamageCausedByGuestsPhotos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: " " }),
    __metadata("design:type", String)
], CreateFloorDto.prototype, "DamageReportText", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "array", items: { type: "string", format: "binary" } }),
    __metadata("design:type", Array)
], CreateFloorDto.prototype, "DamageReportPhotos", void 0);
exports.CreateFloorDto = CreateFloorDto;
//# sourceMappingURL=create-floor.dto.js.map