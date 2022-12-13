"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BedModule = void 0;
const common_1 = require("@nestjs/common");
const bed_service_1 = require("./bed.service");
const bed_controller_1 = require("./bed.controller");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("../user/entities/user.entity");
const bed_entity_1 = require("./entities/bed.entity");
let BedModule = class BedModule {
};
BedModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
                { name: bed_entity_1.Bed.name, schema: bed_entity_1.BedSchema }
            ])
        ],
        controllers: [bed_controller_1.BedController],
        providers: [bed_service_1.BedService]
    })
], BedModule);
exports.BedModule = BedModule;
//# sourceMappingURL=bed.module.js.map