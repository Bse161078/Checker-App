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
exports.BillsController = void 0;
const common_1 = require("@nestjs/common");
const bills_service_1 = require("./bills.service");
const create_bill_dto_1 = require("./dto/create-bill.dto");
const swagger_1 = require("@nestjs/swagger");
let BillsController = class BillsController {
    constructor(billsService) {
        this.billsService = billsService;
    }
    async create(createBillDto) {
        const createdResult = await this.billsService.create(createBillDto);
        return {
            message: "updated/created successfully"
        };
    }
    async findAll() {
        const bills = await this.billsService.findAll();
        return {
            bills
        };
    }
    async getByCleaner(id) {
        const bill = await this.billsService.getCleanerBill(id);
        return {
            bill
        };
    }
    async findOne(id) {
        const bill = await this.billsService.findOne(id);
        return {
            bill
        };
    }
};
__decorate([
    (0, common_1.Post)(":cleanerID"),
    (0, swagger_1.ApiParam)({ name: "cleanerID", type: "string" }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bill_dto_1.CreateBillDto]),
    __metadata("design:returntype", Promise)
], BillsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BillsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/by-cleaner/:cleanerID'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BillsController.prototype, "getByCleaner", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({ name: "id", type: "string" }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BillsController.prototype, "findOne", null);
BillsController = __decorate([
    (0, common_1.Controller)('bills'),
    (0, swagger_1.ApiTags)("Bill of cleaner"),
    __metadata("design:paramtypes", [bills_service_1.BillsService])
], BillsController);
exports.BillsController = BillsController;
//# sourceMappingURL=bills.controller.js.map