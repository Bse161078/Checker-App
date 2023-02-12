import { BadRequestException, ForbiddenException, Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { FilterQuery, Model, Types } from 'mongoose';
import { Room, RoomDocument } from '../room/entities/room.entity';
import { User, UserDocument } from '../user/entities/user.entity';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { Level, LevelDocument } from './entities/level.entity';
import { ROLES } from 'src/common/enums/role.enum';

@Injectable({ scope: Scope.REQUEST })
export class LevelService {
  constructor(
    @InjectModel(Level.name) private readonly adminLevelRepository: Model<LevelDocument>,
    @InjectModel(Room.name) private readonly adminRoomRepository: Model<RoomDocument>,
    @InjectModel(User.name) private readonly userRepository: Model<UserDocument>,
    @Inject(REQUEST) private request: any
  ) { }

  async create(createLevelDto: CreateLevelDto, userID: Types.ObjectId) {
    const levelDto = Object.assign(createLevelDto, { hotel: new Types.ObjectId(userID) });
    const level = await this.adminLevelRepository.create(levelDto);
    return level;
  }
  async findAll(filter: FilterQuery<UserDocument> = {}) {
    const user = this.request.user;
    if(user.hotel) filter['hotel'] = user.hotel._id;
    if(user.role == ROLES.HOTELADMIN) filter['hotel'] = user._id;
    return await this.adminLevelRepository.aggregate([
      { $match: filter },
      {
        $lookup: {
          from: "users",
          foreignField: "_id",
          localField: "hotel",
          as: "hotel"
        }
      },
      { $unwind: "$hotel" },
      {
        $project: {
          "hotel.password": 0,
          "hotel.phones": 0,
          "hotel.accessToken": 0,
          "hotel.__v": 0,
        }
      }
    ]);
  }
  async findOne(id: string) {
    const level = (await this.findAll({ _id: new Types.ObjectId(id) }))?.[0];
    if (!level) throw new NotFoundException("Not found any level document");
    return level
  }
  async update(id: string, updateLevelDto: UpdateLevelDto) {
    const level: LevelDocument = await this.findOne(id);
    const user = this.request.user;
    if (user._id.toString() != level.hotel._id.toString()) throw new ForbiddenException("you're not this level maker");
    const updateLevelResult = await this.adminLevelRepository.updateOne(
      { _id: id },
      { $set: updateLevelDto }
    );
    if (updateLevelResult.modifiedCount == 0) throw new BadRequestException("updated failed");
    return updateLevelResult;

  }
  async remove(id: string) {
    const level = await this.findOne(id);
    const user = this.request.user
    if (user._id.toString() != level.hotel._id.toString()) throw new ForbiddenException("you're not this level maker");
    const deletedResult = await this.adminLevelRepository.deleteOne({ _id: id });
    if (deletedResult.deletedCount == 0) throw new BadRequestException("deleted was failed");
    await this.adminRoomRepository.updateMany({ level: id }, { $set: { level: undefined } })
    return true
  }
}
