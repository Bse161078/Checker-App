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
exports.CreateShelvesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateShelvesDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: false, type: "boolean", }),
    __metadata("design:type", Boolean)
], CreateShelvesDto.prototype, "topQuestionStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "string", format: "binary" }),
    __metadata("design:type", String)
], CreateShelvesDto.prototype, "samplePhotoTopQuestion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "boolean" }),
    __metadata("design:type", Boolean)
], CreateShelvesDto.prototype, "tableNotCleanStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "array", items: { type: "string", format: "binary" } }),
    __metadata("design:type", Array)
], CreateShelvesDto.prototype, "tableNotCleanPhotos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "boolean" }),
    __metadata("design:type", Boolean)
], CreateShelvesDto.prototype, "sideTableNotCleanStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "array", items: { type: "string", format: "binary" } }),
    __metadata("design:type", Array)
], CreateShelvesDto.prototype, "sideTableNotCleanPhotos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "boolean" }),
    __metadata("design:type", Boolean)
], CreateShelvesDto.prototype, "tvStandNotCleanStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "array", items: { type: "string", format: "binary" } }),
    __metadata("design:type", Array)
], CreateShelvesDto.prototype, "tvStandNotCleanPhotos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "boolean" }),
    __metadata("design:type", Boolean)
], CreateShelvesDto.prototype, "cabinetTopAndInsideSurfacesNotCleanStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "array", items: { type: "string", format: "binary" } }),
    __metadata("design:type", Array)
], CreateShelvesDto.prototype, "cabinetTopAndInsideSurfacesNotCleanPhotos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "boolean" }),
    __metadata("design:type", Boolean)
], CreateShelvesDto.prototype, "windowSillNotCleanStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "array", items: { type: "string", format: "binary" } }),
    __metadata("design:type", Array)
], CreateShelvesDto.prototype, "windowSillNotCleanPhotos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "boolean" }),
    __metadata("design:type", Boolean)
], CreateShelvesDto.prototype, "BrochuresNotNeatlyAndSortedInTheirPlaceStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "array", items: { type: "string", format: "binary" } }),
    __metadata("design:type", Array)
], CreateShelvesDto.prototype, "BrochuresNotNeatlyAndSortedInTheirPlacePhotos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], CreateShelvesDto.prototype, "DamageReportText", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "array", items: { type: "string", format: "binary" } }),
    __metadata("design:type", Array)
], CreateShelvesDto.prototype, "DamageReportPhotos", void 0);
exports.CreateShelvesDto = CreateShelvesDto;
//# sourceMappingURL=create-shelf.dto.js.map