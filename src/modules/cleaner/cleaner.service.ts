import { BadRequestException, Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { FilterQuery, Model, Types } from 'mongoose';
import { ADMIN_ROLES, ROLES } from 'src/common/enums/role.enum';
import { removeEmptyFieldsObject } from 'src/common/utils/functions';
import { AuthService } from '../auth/services/auth.service';
import { User, UserDocument } from '../user/entities/user.entity';
import { CreateCleanerDto } from './dto/create-cleaner.dto';
import { UpdateCleanerDto } from './dto/update-cleaner.dto';

@Injectable({ scope: Scope.REQUEST })
export class CleanerService {
  constructor(
    @InjectModel(User.name) private userRepository: Model<UserDocument>,
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
    const cleaner = await this.userRepository.create(createCleanerDto);
    return cleaner;
  }

  async findAll() {
    const user = this.request.user;
    let filter: FilterQuery<UserDocument> = {};
    if (user.role == ROLES.COMPANYADMIN) {
      filter['company'] = user._id;
    } else {
      filter['hotel'] = user.hotel;
    }
    const cleaners = await this.userRepository.find(filter);
    return { cleaners }
  }

  async findOne(id: string) {
    const cleanerID = new Types.ObjectId(id);
    const hotel = this.request.user.hotel;
    const cleaner = await this.userRepository.findOne({ _id: cleanerID, hotel });
    if (cleaner) return cleaner;
    throw new NotFoundException("cleaner not found");
  }

  async update(id: string, updateCleanerDto: UpdateCleanerDto) {
    const cleaner = await this.findOne(id);
    const newCleanerDto = removeEmptyFieldsObject(updateCleanerDto)
    const updatedResult = await this.userRepository.updateOne({ _id: cleaner._id }, {
      $set: newCleanerDto
    })
    if(!!updatedResult.modifiedCount) return true;
    throw new BadRequestException("updated cleaner failed")
  }

  async remove(id: string) {
    const cleaner = await this.findOne(id);
    const deletedResult = await this.userRepository.deleteOne({ _id: cleaner._id })
    if(!!deletedResult.deletedCount) return true;
    throw new BadRequestException("deleted cleaner failed")
  }
}
