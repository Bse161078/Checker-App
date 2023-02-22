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
exports.MaterialListService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const material_list_entity_1 = require("./entities/material-list.entity");
const mongoose_2 = require("mongoose");
const user_entity_1 = require("../user/entities/user.entity");
const core_1 = require("@nestjs/core");
const role_enum_1 = require("../../common/enums/role.enum");
const functions_1 = require("../../common/utils/functions");
const email_1 = require("../utils/email");
const material_enum_1 = require("./enum/material.enum");
let MaterialListService = class MaterialListService {
    constructor(materialRepository, userRepository, materialOrdersRepository, request) {
        this.materialRepository = materialRepository;
        this.userRepository = userRepository;
        this.materialOrdersRepository = materialOrdersRepository;
        this.request = request;
    }
    async create(createMaterialListDto) {
        const user = this.request.user;
        if (user.role == role_enum_1.ROLES.CHECKER) {
            createMaterialListDto.checker = new mongoose_2.Types.ObjectId(user._id);
            createMaterialListDto.hotel = new mongoose_2.Types.ObjectId(user.hotel._id);
        }
        if (user.role == role_enum_1.ROLES.HOTELADMIN) {
            createMaterialListDto.hotel = new mongoose_2.Types.ObjectId(user._id);
        }
        const createdResult = await this.materialRepository.create(createMaterialListDto);
        return createdResult;
    }
    async findAll() {
        const user = this.request.user;
        const filter = {};
        if (user.role == role_enum_1.ROLES.HOTELADMIN)
            filter['hotel'] = user._id;
        else if (user.hotel)
            filter['hotel'] = user.hotel._id;
        else
            return [];
        const materials = await this.materialRepository.find(filter)
            .populate({ path: "hotel", select: { username: 1, fullname: 1, hotel_name: 1 } })
            .populate({ path: "checker", select: { username: 1, fullname: 1 } });
        return materials;
    }
    async findOne(id) {
        const user = this.request.user;
        const material = await this.materialRepository.findOne({ _id: id })
            .populate({ path: "hotel", select: { username: 1, fullname: 1, hotel_name: 1 } })
            .populate({ path: "checker", select: { username: 1, fullname: 1 } });
        if (!material)
            throw new common_1.NotFoundException("not found any material");
        return material;
    }
    async update(id, updateMaterialListDto) {
        const material = await this.findOne(id);
        updateMaterialListDto = (0, functions_1.removeEmptyFieldsObject)(updateMaterialListDto);
        const updatedResult = await this.materialRepository.updateOne({ _id: id }, {
            $set: updateMaterialListDto
        });
        return updatedResult;
    }
    async remove(id) {
        const material = await this.findOne(id);
        const deletedResult = await this.materialRepository.deleteOne({ _id: id });
        return deletedResult;
    }
    async orderMaterial(materialId, createMaterialOrder) {
        const user = this.request.user;
        if (user.role === role_enum_1.ROLES.CHECKER) {
            const hotel = await this.userRepository.findById(new mongoose_2.Types.ObjectId(user.hotel._id));
            const material = await this.materialRepository.findOneAndUpdate({ _id: new mongoose_2.Types.ObjectId(materialId),
                hotel: new mongoose_2.Types.ObjectId(user.hotel._id) }, { quantity: (createMaterialOrder.quantity).toString() });
            if (material) {
                const materialOrder = await this.materialOrdersRepository.create(Object.assign(Object.assign({}, createMaterialOrder), { checker: user._id, hotel: user.hotel._id, material: material._id }));
                let email;
                if ((createMaterialOrder.emailTo === material_enum_1.OrderEmailDto.HOTEL && hotel.email && (hotel.email).length > 0)) {
                    email = hotel.email;
                }
                if ((createMaterialOrder.emailTo === material_enum_1.OrderEmailDto.HOTEL && hotel.company && (hotel.company).length > 0)) {
                    email = hotel.company;
                }
                if (email && email.length > 0)
                    await (0, email_1.sendEmail)(email, user.username, material.name, createMaterialOrder.quantity);
                return material;
            }
            else {
                throw new common_1.NotFoundException("material not found");
            }
        }
        else {
            throw new common_1.BadRequestException("bad request");
        }
    }
};
MaterialListService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, mongoose_1.InjectModel)(material_list_entity_1.Material.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)("material-orders")),
    __param(3, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model, Object])
], MaterialListService);
exports.MaterialListService = MaterialListService;
//# sourceMappingURL=material-list.service.js.map