import { BadRequestException, Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { FilterQuery, Model, Types } from 'mongoose';
import { ADMIN_ROLES, ROLES } from 'src/common/enums/role.enum';
import { ROOM_STATUS } from 'src/common/enums/room-status.enum';
import { parseTime, removeEmptyFieldsObject } from 'src/common/utils/functions';
import { AuthService } from '../auth/services/auth.service';
import { CleaningHistory, CleaningHistoryDocument } from '../room/entities/cleaning-history.entity';
import { User, UserDocument } from '../user/entities/user.entity';
import { CreateCleanerDto } from './dto/create-cleaner.dto';
import { UpdateCleanerDto } from './dto/update-cleaner.dto';

@Injectable({ scope: Scope.REQUEST })
export class CleanerService {
  constructor(
    @InjectModel(User.name) private userRepository: Model<UserDocument>,
    @InjectModel(CleaningHistory.name) private cleaningHistoryRepository: Model<CleaningHistoryDocument>,
    @Inject(REQUEST) private request: Request,
    private authService: AuthService
  ) { }
  async create(createCleanerDto: CreateCleanerDto) {
    const user = this.request.user;
    if (user.role == ADMIN_ROLES.COMPANYADMIN) {
      createCleanerDto.company = user._id;
      const { hotelID } = createCleanerDto;
      if (hotelID) createCleanerDto.hotel = new Types.ObjectId(hotelID);
    }
    if (user.role == ADMIN_ROLES.HOTELADMIN) createCleanerDto.hotel = user._id;
    createCleanerDto.password = this.authService.hashPassword(createCleanerDto.password);
    createCleanerDto.role = ROLES.CLEANER;
    const cleaner = await this.userRepository.create(createCleanerDto);
    return cleaner;
  }

  async findAll() {
    const user = this.request.user;
    let filter: FilterQuery<UserDocument> = {role: ROLES.CLEANER};
    if (user.role == ROLES.COMPANYADMIN) {
      filter['company'] = user._id;
    } else if (user.role == ROLES.HOTELADMIN) {
      filter['hotel'] = user._id;
    } else if (user.role == ROLES.SUPERADMIN) {
      filter = {role: ROLES.CLEANER}
    } else {
      filter['hotel'] = user.hotel;
    }
    if (user.role != ROLES.SUPERADMIN && Object.values(filter).length == 0) return []
    const cleaners = await this.userRepository.find(filter);
    return cleaners
  }

  async findOne(id: string) {
    const cleanerID = new Types.ObjectId(id);
    const cleaner = await this.userRepository.findOne({ _id: cleanerID, role: ROLES.CLEANER });
    if (cleaner) return cleaner;
    throw new NotFoundException("cleaner not found");
  }

  async update(id: string, updateCleanerDto: UpdateCleanerDto) {
    const cleaner = await this.findOne(id);
    const newCleanerDto = removeEmptyFieldsObject(updateCleanerDto)
    const updatedResult = await this.userRepository.updateOne({ _id: cleaner._id }, {
      $set: newCleanerDto
    })
    if (!!updatedResult.modifiedCount) return true;
    throw new BadRequestException("updated cleaner failed")
  }

  async remove(id: string) {
    const cleaner = await this.findOne(id);
    const deletedResult = await this.userRepository.deleteOne({ _id: cleaner._id })
    if (!!deletedResult.deletedCount) return true;
    throw new BadRequestException("deleted cleaner failed")
  }
  async startCleaningRoom(roomID: string){
    const date = new Date();
    const room = new Types.ObjectId(roomID);
    const cleaner = this.request.user._id;
    const cleaningStartAt: string = parseTime(date.getHours(), date.getMinutes());
    const roomData = await this.cleaningHistoryRepository.findOne({room, status: ROOM_STATUS.START});
    if(roomData) throw new BadRequestException("Room cleaning not finished. Please finish cleaning first.")
    const createResult = await this.cleaningHistoryRepository.create({
      cleaner,
      cleaningStartAt,
      room,
      status: ROOM_STATUS.START
    });;
    return createResult;
  }
  async endCleaningRoom(roomID: string){
    const date = new Date();
    const room = new Types.ObjectId(roomID);
    const cleaner = this.request.user._id;
    const cleaningEndAt: string = parseTime(date.getHours(), date.getMinutes());
    const roomData = await this.cleaningHistoryRepository.findOne({room, status: ROOM_STATUS.START, cleaner});
    if(!roomData) throw new BadRequestException("not found any room being cleaned")
    const updatedResult = await this.cleaningHistoryRepository.updateOne({_id: roomData._id}, {
      $set: {
        status: ROOM_STATUS.FINISH,
        cleaningEndAt
      }
    });
    return {updatedResult, cleaningEndAt};
  }
  async getCompanyCleaners(companyID: string){
    const cleaners = await this.userRepository.find({company: companyID, role: ROLES.CLEANER});
    return cleaners
  }
  async getCompanyCleanerById(cleanerId: string){
    const cleaner = await this.userRepository.findOne({_id: cleanerId, role: ROLES.CLEANER});
    if(!cleaner) throw new NotFoundException("not found any cleaner");
    return cleaner
  }
  async getHotelCleaners(hotelID: string){
    const cleaners = await this.userRepository.find({hotel: hotelID, role: ROLES.CLEANER});
    return cleaners
  }
  async getHotelCleanerById(cleanerId: string){
    const cleaner = await this.userRepository.findOne({_id: cleanerId, role: ROLES.CLEANER});
    if(!cleaner) throw new NotFoundException("not found any cleaner");
    return cleaner
  }
}
