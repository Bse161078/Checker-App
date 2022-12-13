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
let TopQuestionClass = class TopQuestionClass extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TopQuestionClass.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean }),
    __metadata("design:type", Boolean)
], TopQuestionClass.prototype, "value", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TopQuestionClass.prototype, "samplePhoto", void 0);
TopQuestionClass = __decorate([
    (0, mongoose_1.Schema)()
], TopQuestionClass);
let CommentsClass = class CommentsClass extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CommentsClass.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean }),
    __metadata("design:type", Boolean)
], CommentsClass.prototype, "value", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: [] }),
    __metadata("design:type", Array)
], CommentsClass.prototype, "photos", void 0);
CommentsClass = __decorate([
    (0, mongoose_1.Schema)()
], CommentsClass);
let DamageReportClass = class DamageReportClass extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], DamageReportClass.prototype, "text", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: [] }),
    __metadata("design:type", Array)
], DamageReportClass.prototype, "photos", void 0);
DamageReportClass = __decorate([
    (0, mongoose_1.Schema)()
], DamageReportClass);
const TopQuestionSchema = mongoose_1.SchemaFactory.createForClass(TopQuestionClass);
const CommentsSchema = mongoose_1.SchemaFactory.createForClass(CommentsClass);
const DamageReportSchema = mongoose_1.SchemaFactory.createForClass(DamageReportClass);
class CheckList {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CheckList.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: TopQuestionSchema }),
    __metadata("design:type", Object)
], CheckList.prototype, "topQuestion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [CommentsSchema] }),
    __metadata("design:type", Array)
], CheckList.prototype, "comments", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [DamageReportSchema] }),
    __metadata("design:type", Array)
], CheckList.prototype, "damage", void 0);
exports.CheckList = CheckList;
exports.CheckListSchema = mongoose_1.SchemaFactory.createForClass(CheckList);
//# sourceMappingURL=check-list.entity.js.map