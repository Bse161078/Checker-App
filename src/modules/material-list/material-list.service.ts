import {BadRequestException, Inject, Injectable, NotFoundException, Scope} from '@nestjs/common';
import {CreateMaterialListDto} from './dto/create-material-list.dto';
import {UpdateMaterialListDto} from './dto/update-material-list.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Material, MaterialDocument} from './entities/material-list.entity';
import {FilterQuery, Model, Types} from 'mongoose';
import {User, UserDocument} from '../user/entities/user.entity';
import {REQUEST} from '@nestjs/core';
import {Request} from 'express';
import {ROLES} from 'src/common/enums/role.enum';
import {removeEmptyFieldsObject} from 'src/common/utils/functions';
import {OrderMaterialDto} from "./dto/materila.dto";
import {MaterialOrderDocument} from "./entities/order-material-list-entity";
import {sendEmail} from "../utils/email";

@Injectable({scope: Scope.REQUEST})
export class MaterialListService {
    constructor(
        @InjectModel(Material.name) private materialRepository: Model<MaterialDocument>,
        @InjectModel(User.name) private userRepository: Model<UserDocument>,
        @InjectModel("material-orders") private materialOrdersRepository: Model<MaterialOrderDocument>,
        @Inject(REQUEST) private request: any
    ) {
    }

    async create(createMaterialListDto: CreateMaterialListDto) {
        const user = this.request.user;
        if (user.role == ROLES.CHECKER) {
            createMaterialListDto.checker = new Types.ObjectId(user._id);
            createMaterialListDto.hotel = new Types.ObjectId(user.hotel._id);
        }
        if (user.role == ROLES.HOTELADMIN) {
            createMaterialListDto.hotel = new Types.ObjectId(user._id);
        }
        const createdResult = await this.materialRepository.create(createMaterialListDto);
        return createdResult
    }

    async findAll() {
        const user = this.request.user;
        const filter: FilterQuery<MaterialDocument> = {}
        if (user.role == ROLES.HOTELADMIN) filter['hotel'] = user._id;
        else if (user.hotel) filter['hotel'] = user.hotel._id;
        else return []
        const materials = await this.materialRepository.find(filter)
            .populate(
                {path: "hotel", select: {username: 1, fullname: 1, hotel_name: 1}}
            )
            .populate(
                {path: "checker", select: {username: 1, fullname: 1}}
            );
        return materials
    }

    async findOne(id: string) {
        const user = this.request.user;
        const material = await this.materialRepository.findOne({_id: id})
            .populate(
                {path: "hotel", select: {username: 1, fullname: 1, hotel_name: 1}}
            )
            .populate(
                {path: "checker", select: {username: 1, fullname: 1}}
            );
        if (!material) throw new NotFoundException("not found any material")
        return material
    }

    async update(id: string, updateMaterialListDto: UpdateMaterialListDto) {
        const material = await this.findOne(id);
        updateMaterialListDto = removeEmptyFieldsObject(updateMaterialListDto)
        const updatedResult = await this.materialRepository.updateOne({_id: id}, {
            $set: updateMaterialListDto
        })
        return updatedResult;
    }

    async remove(id: string) {
        const material = await this.findOne(id);
        const deletedResult = await this.materialRepository.deleteOne({_id: id});
        return deletedResult;
    }

    async orderMaterial(materialId: string,createMaterialOrder: OrderMaterialDto) {
        const user = this.request.user;
        if(user.role===ROLES.CHECKER){
            const hotel=await this.userRepository.findById(new Types.ObjectId(user.hotel._id));
            const material:any=await this.materialRepository.findOne({_id:new Types.ObjectId(materialId),
                hotel:new Types.ObjectId(user.hotel._id)});
            if(material){
                const materialOrder=await this.materialOrdersRepository.create({
                    ...createMaterialOrder,checker:user._id,hotel:user.hotel._id,material:material._id
                });
                await sendEmail(hotel.email,user.username,material.name,createMaterialOrder.quantity);
                return materialOrder;
            }else{
                throw new NotFoundException("material not found")
            }
        }else{
            throw new BadRequestException("bad request")
        }
    }

}
