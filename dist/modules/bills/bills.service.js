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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillsService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const mongoose_1 = require("@nestjs/mongoose");
const bill_entity_1 = require("./entities/bill.entity");
const mongoose_2 = require("mongoose");
const cleaning_history_entity_1 = require("../room/entities/cleaning-history.entity");
const user_entity_1 = require("../user/entities/user.entity");
const role_enum_1 = require("../../common/enums/role.enum");
const room_status_enum_1 = require("../../common/enums/room-status.enum");
const rxjs_1 = require("rxjs");
let BillsService = class BillsService {
    constructor(request, billRepository, cleaningHistoryRepository, userRepository) {
        this.request = request;
        this.billRepository = billRepository;
        this.cleaningHistoryRepository = cleaningHistoryRepository;
        this.userRepository = userRepository;
    }
    async create(createBillDto) {
        const user = this.request.user;
        const filter = { _id: createBillDto.cleanerID };
        if (user.role == role_enum_1.ROLES.HOTELADMIN)
            filter['hotel'] = user._id;
        if (user.role == role_enum_1.ROLES.COMPANYADMIN)
            filter['company'] = user._id;
        const cleaner = await this.userRepository.findOne(filter);
        if (!cleaner)
            throw new common_1.NotFoundException("not found any cleaner");
        const basePrice = cleaner.salaryPerRoom;
        const roomHistory = await this.cleaningHistoryRepository.find({
            cleaner: cleaner._id,
            status: room_status_enum_1.ROOM_STATUS.FINISH,
            checkoutStatus: false,
            checkerStatus: room_status_enum_1.ROOM_STATUS.CLEANED
        });
        const totalPrice = +basePrice * roomHistory.length;
        const bill = await this.billRepository.findOne({ cleaner: cleaner._id, checkout: false });
        if (bill) {
            await this.billRepository.updateOne({ _id: bill._id }, {
                $set: {
                    checkoutAmount: totalPrice,
                }
            });
        }
        else {
            const createdResult = await this.billRepository.create({
                checkout: false,
                checkoutAmount: totalPrice,
                cleaner: cleaner._id,
                hotel: cleaner.hotel,
                company: cleaner === null || cleaner === void 0 ? void 0 : cleaner.company,
            });
        }
        return true;
    }
    async findAll() {
        const filter = {};
        const user = this.request.user;
        if (user.role == role_enum_1.ROLES.HOTELADMIN)
            filter['hotel'] = user._id;
        if (user.role == role_enum_1.ROLES.HOTELADMIN)
            filter['company'] = user._id;
        const bills = await this.billRepository.find(filter);
        return bills;
    }
    async findOne(id) {
        const bill = await this.billRepository.findOne({ _id: rxjs_1.identity });
        return bill;
    }
    async getCleanerBill(cleanerID) {
        const bill = await this.billRepository.findOne({ cleaner: cleanerID });
        if (!bill)
            throw new common_1.NotFoundException("not found any bill");
        return bill;
    }
};
BillsService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __param(1, (0, mongoose_1.InjectModel)(bill_entity_1.Bill.name)),
    __param(2, (0, mongoose_1.InjectModel)(cleaning_history_entity_1.CleaningHistory.name)),
    __param(3, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [Object, mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], BillsService);
exports.BillsService = BillsService;
//# sourceMappingURL=bills.service.js.map