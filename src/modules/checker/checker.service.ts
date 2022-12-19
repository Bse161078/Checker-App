import { BadRequestException, Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { FilterQuery, Model, Types } from 'mongoose';
import { ADMIN_ROLES, ROLES } from 'src/common/enums/role.enum';
import { removeEmptyFieldsObject } from 'src/common/utils/functions';
import { AuthService } from '../auth/services/auth.service';
import { User, UserDocument } from '../user/entities/user.entity';
import { CreateCheckerDto } from './dto/create-checker.dto';
import { UpdateCheckerDto } from './dto/update-checker.dto';

@Injectable({ scope: Scope.REQUEST })
export class CheckerService {
  constructor(
    @InjectModel(User.name) private userRepository: Model<UserDocument>,
    @Inject(REQUEST) private request: Request,
    private authService: AuthService
  ) { }
  async create(createCheckerDto: CreateCheckerDto) {
    const user = this.request.user;
    if (user.role == ADMIN_ROLES.COMPANYADMIN) {
      createCheckerDto.company = user._id;
      const { hotelID } = createCheckerDto;
      if (hotelID) createCheckerDto.hotel = new Types.ObjectId(hotelID);
    }
    if (user.role == ADMIN_ROLES.HOTELADMIN) createCheckerDto.hotel = user._id;
    createCheckerDto.password = this.authService.hashPassword(createCheckerDto.password);
    createCheckerDto.role = ROLES.CHECKER;
    const checker = await this.userRepository.create(createCheckerDto);
    return checker;
  }

  async findAll() {
    const user = this.request.user;
    let filter: FilterQuery<UserDocument> = {role: ROLES.CHECKER};
    if (user.role == ROLES.COMPANYADMIN) {
      filter['company'] = user._id;
    } else if (user.role == ROLES.HOTELADMIN) {
      filter['hotel'] = user._id;
    } else if (user.role == ROLES.SUPERADMIN) {
      filter = {role: ROLES.CHECKER}
    } else {
      filter['hotel'] = user.hotel;
    }
    if (user.role != ROLES.SUPERADMIN && Object.values(filter).length == 0) return []
    const checkers = await this.userRepository.find(filter);
    return checkers
  }

  async findOne(id: string) {
    const checkerID = new Types.ObjectId(id);
    const checker = await this.userRepository.findOne({ _id: checkerID, role: ROLES.CHECKER });
    if (checker) return checker;
    throw new NotFoundException("checker not found");
  }

  async update(id: string, updateCheckerDto: UpdateCheckerDto) {
    const checker = await this.findOne(id);
    const newCheckerDto = removeEmptyFieldsObject(updateCheckerDto)
    const updatedResult = await this.userRepository.updateOne({ _id: checker._id }, {
      $set: newCheckerDto
    })
    if (!!updatedResult.modifiedCount) return true;
    throw new BadRequestException("updated checker failed")
  }

  async remove(id: string) {
    const checker = await this.findOne(id);
    const deletedResult = await this.userRepository.deleteOne({ _id: checker._id })
    if (!!deletedResult.deletedCount) return true;
    throw new BadRequestException("deleted checker failed")
  }
  async getCompanyCheckers(companyID: string){
    const checkers = await this.userRepository.find({company: companyID, role: ROLES.CHECKER});
    return checkers
  }
  async getCompanyCheckerById(checkerId: string){
    const checker = await this.userRepository.findOne({_id: checkerId, role: ROLES.CHECKER});
    if(!checker) throw new NotFoundException("not found any checker");
    return checker
  }
  async getHotelCheckers(hotelID: string){
    const checkers = await this.userRepository.find({hotel: hotelID, role: ROLES.CHECKER});
    return checkers
  }
  async getHotelCheckerById(checkerId: string){
    const checker = await this.userRepository.findOne({_id: checkerId, role: ROLES.CHECKER});
    if(!checker) throw new NotFoundException("not found any checker");
    return checker
  }
}
