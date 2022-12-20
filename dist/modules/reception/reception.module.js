"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceptionModule = void 0;
const common_1 = require("@nestjs/common");
const reception_service_1 = require("./reception.service");
const reception_controller_1 = require("./reception.controller");
let ReceptionModule = class ReceptionModule {
};
ReceptionModule = __decorate([
    (0, common_1.Module)({
        controllers: [reception_controller_1.ReceptionController],
        providers: [reception_service_1.ReceptionService]
    })
], ReceptionModule);
exports.ReceptionModule = ReceptionModule;
//# sourceMappingURL=reception.module.js.map