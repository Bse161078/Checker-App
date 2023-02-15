import { Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { CreateCheckListDto } from './dto/create-check-list.dto';
import { InjectModel } from '@nestjs/mongoose';
import { CheckList, CheckListDocument } from './entities/check-list.entity';
import { FilterQuery, Model, Types } from 'mongoose';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { CheckListSupplier } from './enum/check-list-supplier.enum';
import { User, UserDocument } from '../user/entities/user.entity';
import { ROLES } from 'src/common/enums/role.enum';

@Injectable({ scope: Scope.REQUEST })
export class CheckListService {
  constructor(
    @InjectModel(CheckList.name) private checkListRepository: Model<CheckListDocument>,
    @InjectModel(User.name) private  userRepository: Model<UserDocument>,
    @Inject(REQUEST) private request: any
  ) { }
  async create(createCheckListDto: CreateCheckListDto) {
    const user = this.request.user;
    const hotel = user.hotel._id;
    const hotelObject = await this.userRepository.findOne({_id: hotel})
    createCheckListDto.checker = user._id;
    createCheckListDto.materials = createCheckListDto.materials.map(item => {
      item.material = new Types.ObjectId(item.material);
      item.quantity = +item.quantity
      return item;
    })
    if (createCheckListDto.supplier == CheckListSupplier.COMPANY) {
      //send-email
      //check-company-exist
      createCheckListDto.company = hotelObject.company
    }
    const checkList = await this.checkListRepository.findOne({ hotel })
    if(checkList) {
      await this.checkListRepository.updateOne({_id: checkList._id}, {
        $set: createCheckListDto
      })
    }else {
      await this.checkListRepository.create(createCheckListDto)
    }
    return true
  }

  async findAll() {
    const user = this.request.user;
    const filter: FilterQuery<CheckListDocument> = {}
    if(user.role = ROLES.CHECKER) filter['hotel'] = user.hotel._id
    else if(user.role = ROLES.HOTELADMIN) filter['hotel'] = user._id
    else if(user.role = ROLES.COMPANYADMIN) filter['company'] = user._id
    const checkList = await this.checkListRepository.find(filter).populate('materials.material');
    return checkList
  }

  async findOne(id: string) {
    const checkList = await this.checkListRepository.findOne({_id: id});
    if(checkList) throw new NotFoundException("not found any checklist")
    return checkList
  }

  async remove(id: string) {
    const checkList = await this.findOne(id);
    await this.checkListRepository.deleteOne({_id: id});
    return true
  }
}
