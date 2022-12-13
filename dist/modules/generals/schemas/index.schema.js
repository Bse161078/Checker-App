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
exports.DamageReportSchema = exports.TopQuestionSchema = exports.CommentsValueSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TopQuestionClass = class TopQuestionClass extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean }),
    __metadata("design:type", Boolean)
], TopQuestionClass.prototype, "value", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: [] }),
    __metadata("design:type", Array)
], TopQuestionClass.prototype, "samplePhoto", void 0);
TopQuestionClass = __decorate([
    (0, mongoose_1.Schema)()
], TopQuestionClass);
let CommentValueClass = class CommentValueClass extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean }),
    __metadata("design:type", Boolean)
], CommentValueClass.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: [] }),
    __metadata("design:type", Array)
], CommentValueClass.prototype, "photos", void 0);
CommentValueClass = __decorate([
    (0, mongoose_1.Schema)()
], CommentValueClass);
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
exports.CommentsValueSchema = mongoose_1.SchemaFactory.createForClass(CommentValueClass);
exports.TopQuestionSchema = mongoose_1.SchemaFactory.createForClass(TopQuestionClass);
exports.DamageReportSchema = mongoose_1.SchemaFactory.createForClass(DamageReportClass);
//# sourceMappingURL=index.schema.js.map