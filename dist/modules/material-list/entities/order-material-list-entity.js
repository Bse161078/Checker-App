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
exports.MaterialOrderSchema = exports.OrderMaterial = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose_2 = require("mongoose");
let OrderMaterial = class OrderMaterial {
};
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrderMaterial.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: "Material" }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], OrderMaterial.prototype, "material", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: "User" }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], OrderMaterial.prototype, "checker", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: "User" }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], OrderMaterial.prototype, "hotel", void 0);
OrderMaterial = __decorate([
    (0, mongoose_1.Schema)({ timestamps: { createdAt: true }, toObject: { virtuals: true } })
], OrderMaterial);
exports.OrderMaterial = OrderMaterial;
exports.MaterialOrderSchema = mongoose_1.SchemaFactory.createForClass(OrderMaterial);
//# sourceMappingURL=order-material-list-entity.js.map