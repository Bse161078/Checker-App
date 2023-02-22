"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const path_1 = require("path");
const jwt_config_1 = require("../../config/jwt.config");
const mongoose_config_1 = require("../../config/mongoose.config");
const auth_module_1 = require("../auth/auth.module");
const bed_module_1 = require("../bed/bed.module");
const bathroom_module_1 = require("../bathroom/bathroom.module");
const check_list_module_1 = require("../check-list/check-list.module");
const cleaner_module_1 = require("../cleaner/cleaner.module");
const curtains_module_1 = require("../curtains/curtains.module");
const floor_module_1 = require("../floor/floor.module");
const level_module_1 = require("../level/level.module");
const room_module_1 = require("../room/room.module");
const shelves_module_1 = require("../shelves/shelves.module");
const user_module_1 = require("../user/user.module");
const checker_module_1 = require("../checker/checker.module");
const room_type_module_1 = require("../room-type/room-type.module");
const bills_module_1 = require("../bills/bills.module");
const hotel_module_1 = require("../hotel/hotel.module");
const company_module_1 = require("../company/company.module");
const material_list_module_1 = require("../material-list/material-list.module");
const reception_module_1 = require("../reception/reception.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: (0, path_1.join)(process.cwd(), ".env." + process.env.NODE_ENV)
            }),
            mongoose_1.MongooseModule.forRoot((0, mongoose_config_1.default)()),
            jwt_1.JwtModule.register((0, jwt_config_1.jwtConfig)()),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            hotel_module_1.HotelModule,
            company_module_1.CompanyModule,
            room_type_module_1.RoomTypeModule,
            cleaner_module_1.CleanerModule,
            bills_module_1.BillsModule,
            checker_module_1.CheckerModule,
            level_module_1.LevelModule,
            room_module_1.AdminRoomModule,
            check_list_module_1.CheckListModule,
            floor_module_1.FloorModule,
            curtains_module_1.CurtainsModule,
            shelves_module_1.ShelvesModule,
            bed_module_1.BedModule,
            bathroom_module_1.BathroomModule,
            material_list_module_1.MaterialListModule,
            reception_module_1.ReceptionModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map