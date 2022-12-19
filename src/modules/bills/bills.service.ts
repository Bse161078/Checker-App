import { Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { InjectModel } from '@nestjs/mongoose';
import { Bill, BillDocument } from './entities/bill.entity';
import { FilterQuery, Model } from 'mongoose';
import { CleaningHistory, CleaningHistoryDocument } from '../room/entities/cleaning-history.entity';
import { User, UserDocument } from '../user/entities/user.entity';
import { ROLES } from 'src/common/enums/role.enum';
import { ROOM_STATUS } from 'src/common/enums/room-status.enum';
import { identity } from 'rxjs';

@Injectable({scope: Scope.REQUEST})
export class BillsService {
  constructor(
    @Inject(REQUEST) private request: Request,
    @InjectModel(Bill.name) private billRepository: Model<BillDocument>,
    @InjectModel(CleaningHistory.name) private cleaningHistoryRepository: Model<CleaningHistoryDocument>,
    @InjectModel(User.name) private userRepository: Model<UserDocument>,
  ){}
  async create(createBillDto: CreateBillDto) {
    const user = this.request.user;
    const filter: FilterQuery<UserDocument> = {_id: createBillDto.cleanerID}
    if(user.role == ROLES.HOTELADMIN) filter['hotel'] = user._id;
    if(user.role == ROLES.COMPANYADMIN) filter['company'] = user._id;
    const cleaner = await this.userRepository.findOne(filter)
    if(!cleaner) throw new NotFoundException("not found any cleaner")
    const basePrice =  cleaner.salaryPerRoom;
    const roomHistory = await this.cleaningHistoryRepository.find({
      cleaner: cleaner._id, 
      status: ROOM_STATUS.FINISH, 
      checkoutStatus: false,
      checkerStatus: ROOM_STATUS.CLEANED
    });
    const totalPrice = +basePrice * roomHistory.length;
    const bill = await this.billRepository.findOne({cleaner: cleaner._id, checkout: false});
    if(bill){
      await this.billRepository.updateOne({_id: bill._id}, {
        $set: {
          checkoutAmount: totalPrice,
        }
      })
    }else {
      const createdResult = await this.billRepository.create({
        checkout: false,
        checkoutAmount: totalPrice,
        cleaner: cleaner._id,
        hotel: cleaner.hotel,
        company: cleaner?.company,
      });
    }
    return true;
  }

  async findAll() {
    const filter: FilterQuery<BillDocument> = {}
    const user = this.request.user;
    if(user.role == ROLES.HOTELADMIN) filter['hotel'] = user._id;
    if(user.role == ROLES.HOTELADMIN) filter['company'] = user._id;
    const bills = await this.billRepository.find(filter);
    return bills;
  }

  async findOne(id: string) {
    const bill = await this.billRepository.findOne({_id: identity});
    return bill;
  }

  async getCleanerBill(cleanerID: string) {
    const bill = await this.billRepository.findOne({cleaner: cleanerID});
    if(!bill) throw new NotFoundException("not found any bill");
    return bill
  }
}
