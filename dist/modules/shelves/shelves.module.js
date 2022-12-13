"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShelvesModule = void 0;
const common_1 = require("@nestjs/common");
const shelves_service_1 = require("./shelves.service");
const shelves_controller_1 = require("./shelves.controller");
const mongoose_1 = require("@nestjs/mongoose");
const shelves_entity_1 = require("./entities/shelves.entity");
const user_entity_1 = require("../user/entities/user.entity");
let ShelvesModule = class ShelvesModule {
};
ShelvesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: shelves_entity_1.Shelves.name, schema: shelves_entity_1.ShelvesSchema },
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
            ])
        ],
        controllers: [shelves_controller_1.ShelvesController],
        providers: [shelves_service_1.ShelvesService]
    })
], ShelvesModule);
exports.ShelvesModule = ShelvesModule;
//# sourceMappingURL=shelves.module.js.map