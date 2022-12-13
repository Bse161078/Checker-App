"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurtainsModule = void 0;
const common_1 = require("@nestjs/common");
const curtains_service_1 = require("./curtains.service");
const curtains_controller_1 = require("./curtains.controller");
const mongoose_1 = require("@nestjs/mongoose");
const curtains_entity_1 = require("./entities/curtains.entity");
const user_entity_1 = require("../user/entities/user.entity");
let CurtainsModule = class CurtainsModule {
};
CurtainsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: curtains_entity_1.Curtain.name, schema: curtains_entity_1.CurtainSchema },
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
            ])
        ],
        controllers: [curtains_controller_1.CurtainsController],
        providers: [curtains_service_1.CurtainsService]
    })
], CurtainsModule);
exports.CurtainsModule = CurtainsModule;
//# sourceMappingURL=curtains.module.js.map