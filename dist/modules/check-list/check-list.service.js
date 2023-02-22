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
exports.CheckListService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const check_list_entity_1 = require("./entities/check-list.entity");
const mongoose_2 = require("mongoose");
const core_1 = require("@nestjs/core");
const check_list_supplier_enum_1 = require("./enum/check-list-supplier.enum");
const user_entity_1 = require("../user/entities/user.entity");
const role_enum_1 = require("../../common/enums/role.enum");
let CheckListService = class CheckListService {
    constructor(checkListRepository, userRepository, request) {
        this.checkListRepository = checkListRepository;
        this.userRepository = userRepository;
        this.request = request;
    }
    async create(createCheckListDto) {
        const user = this.request.user;
        const hotel = user.hotel._id;
        const hotelObject = await this.userRepository.findOne({ _id: hotel });
        createCheckListDto.checker = user._id;
        createCheckListDto.materials = createCheckListDto.materials.map(item => {
            item.material = new mongoose_2.Types.ObjectId(item.material);
            item.quantity = +item.quantity;
            return item;
        });
        if (createCheckListDto.supplier == check_list_supplier_enum_1.CheckListSupplier.COMPANY) {
            createCheckListDto.company = hotelObject.company;
        }
        const checkList = await this.checkListRepository.findOne({ hotel });
        if (checkList) {
            await this.checkListRepository.updateOne({ _id: checkList._id }, {
                $set: createCheckListDto
            });
        }
        else {
            await this.checkListRepository.create(createCheckListDto);
        }
        return true;
    }
    async findAll() {
        const user = this.request.user;
        const filter = {};
        if (user.role = role_enum_1.ROLES.CHECKER)
            filter['hotel'] = user.hotel._id;
        else if (user.role = role_enum_1.ROLES.HOTELADMIN)
            filter['hotel'] = user._id;
        else if (user.role = role_enum_1.ROLES.COMPANYADMIN)
            filter['company'] = user._id;
        const checkList = await this.checkListRepository.find(filter).populate('materials.material');
        return checkList;
    }
    async findOne(id) {
        const checkList = await this.checkListRepository.findOne({ _id: id });
        if (checkList)
            throw new common_1.NotFoundException("not found any checklist");
        return checkList;
    }
    async remove(id) {
        const checkList = await this.findOne(id);
        await this.checkListRepository.deleteOne({ _id: id });
        return true;
    }
};
CheckListService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, mongoose_1.InjectModel)(check_list_entity_1.CheckList.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __param(2, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model, Object])
], CheckListService);
exports.CheckListService = CheckListService;
//# sourceMappingURL=check-list.service.js.map