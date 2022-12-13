"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloorModule = void 0;
const common_1 = require("@nestjs/common");
const floor_service_1 = require("./floor.service");
const floor_controller_1 = require("./floor.controller");
const mongoose_1 = require("@nestjs/mongoose");
const floor_entity_1 = require("./entities/floor.entity");
const user_entity_1 = require("../user/entities/user.entity");
let FloorModule = class FloorModule {
};
FloorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: floor_entity_1.Floor.name, schema: floor_entity_1.FloorSchema },
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
            ])
        ],
        controllers: [floor_controller_1.FloorController],
        providers: [floor_service_1.FloorService]
    })
], FloorModule);
exports.FloorModule = FloorModule;
//# sourceMappingURL=floor.module.js.map