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
exports.CreateBathroomDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateBathroomDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: false, type: "boolean", }),
    __metadata("design:type", Boolean)
], CreateBathroomDto.prototype, "topQuestionStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "array", items: { type: "string", format: "binary" } }),
    __metadata("design:type", Array)
], CreateBathroomDto.prototype, "samplePhotoTopQuestion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "boolean" }),
    __metadata("design:type", Boolean)
], CreateBathroomDto.prototype, "tilesAreNotMoppedStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "array", items: { type: "string", format: "binary" } }),
    __metadata("design:type", Array)
], CreateBathroomDto.prototype, "tilesAreNotMoppedPhotos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "boolean" }),
    __metadata("design:type", Boolean)
], CreateBathroomDto.prototype, "toiletIsNotWipedStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "array", items: { type: "string", format: "binary" } }),
    __metadata("design:type", Array)
], CreateBathroomDto.prototype, "toiletIsNotWipedPhotos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "boolean" }),
    __metadata("design:type", Boolean)
], CreateBathroomDto.prototype, "thereIsDirtInTheShoweStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "array", items: { type: "string", format: "binary" } }),
    __metadata("design:type", Array)
], CreateBathroomDto.prototype, "thereIsDirtInTheShowePhotos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "boolean" }),
    __metadata("design:type", Boolean)
], CreateBathroomDto.prototype, "shelvesAreNotWipedStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "array", items: { type: "string", format: "binary" } }),
    __metadata("design:type", Array)
], CreateBathroomDto.prototype, "shelvesAreNotWipedPhotos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "boolean" }),
    __metadata("design:type", Boolean)
], CreateBathroomDto.prototype, "traysAreNotFilledStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "array", items: { type: "string", format: "binary" } }),
    __metadata("design:type", Array)
], CreateBathroomDto.prototype, "traysAreNotFilledPhotos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CreateBathroomDto.prototype, "DamageReportText", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "array", items: { type: "string", format: "binary" } }),
    __metadata("design:type", Array)
], CreateBathroomDto.prototype, "DamageReportPhotos", void 0);
exports.CreateBathroomDto = CreateBathroomDto;
//# sourceMappingURL=create-bethroom.dto.js.map