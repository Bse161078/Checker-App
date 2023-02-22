"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoomModule = void 0;
const common_1 = require("@nestjs/common");
const room_service_1 = require("./room.service");
const room_controller_1 = require("./room.controller");
const mongoose_1 = require("@nestjs/mongoose");
const room_entity_1 = require("./entities/room.entity");
const user_entity_1 = require("../user/entities/user.entity");
const cleaning_history_entity_1 = require("./entities/cleaning-history.entity");
const room_type_entity_1 = require("../room-type/entities/room-type.entity");
let AdminRoomModule = class AdminRoomModule {
};
AdminRoomModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: room_entity_1.Room.name, schema: room_entity_1.RoomSchema },
                { name: "cleaninghistories", schema: cleaning_history_entity_1.CleaningHistorySchema },
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
                { name: room_type_entity_1.RoomType.name, schema: room_type_entity_1.RoomTypeSchema },
            ])
        ],
        controllers: [room_controller_1.AdminRoomController],
        providers: [room_service_1.AdminRoomService]
    })
], AdminRoomModule);
exports.AdminRoomModule = AdminRoomModule;
//# sourceMappingURL=room.module.js.map