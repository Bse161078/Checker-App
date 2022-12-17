"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomTypeModule = void 0;
const common_1 = require("@nestjs/common");
const room_type_service_1 = require("./room-type.service");
const room_type_controller_1 = require("./room-type.controller");
const mongoose_1 = require("@nestjs/mongoose");
const room_type_entity_1 = require("./entities/room-type.entity");
const room_entity_1 = require("../room/entities/room.entity");
const user_entity_1 = require("../user/entities/user.entity");
let RoomTypeModule = class RoomTypeModule {
};
RoomTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: room_type_entity_1.RoomType.name, schema: room_type_entity_1.RoomTypeSchema },
                { name: room_entity_1.Room.name, schema: room_entity_1.RoomSchema },
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
            ])
        ],
        controllers: [room_type_controller_1.RoomTypeController],
        providers: [room_type_service_1.RoomTypeService]
    })
], RoomTypeModule);
exports.RoomTypeModule = RoomTypeModule;
//# sourceMappingURL=room-type.module.js.map