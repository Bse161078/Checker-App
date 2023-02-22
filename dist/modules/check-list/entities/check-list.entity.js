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
exports.CheckListSchema = exports.CheckList = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const swagger_1 = require("@nestjs/swagger");
const check_list_supplier_enum_1 = require("../enum/check-list-supplier.enum");
let CheckList = class CheckList {
};
__decorate([
    (0, mongoose_1.Prop)({ type: [{
                material: { type: mongoose_2.Types.ObjectId, ref: "Material" },
                quantity: { type: Number },
            }] }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], CheckList.prototype, "materials", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)({ type: "string", enum: check_list_supplier_enum_1.CheckListSupplier }),
    __metadata("design:type", String)
], CheckList.prototype, "supplier", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "User" }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CheckList.prototype, "company", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "User" }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CheckList.prototype, "hotel", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "User" }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CheckList.prototype, "checker", void 0);
CheckList = __decorate([
    (0, mongoose_1.Schema)()
], CheckList);
exports.CheckList = CheckList;
exports.CheckListSchema = mongoose_1.SchemaFactory.createForClass(CheckList);
//# sourceMappingURL=check-list.entity.js.map