import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room, RoomDocument } from '../room/entities/room.entity';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { Level, LevelDocument } from './entities/level.entity';

@Injectable()
export class LevelService {
  constructor(
    @InjectModel(Level.name) private readonly adminLevelRepository: Model<LevelDocument>,
    @InjectModel(Room.name) private readonly adminRoomRepository: Model<RoomDocument>,
  ) { }

  async create(createLevelDto: CreateLevelDto) {
    const level = await this.adminLevelRepository.create(createLevelDto);
    return level;
  }

  async findAll() {
    return await this.adminLevelRepository.aggregate([
      { $match: {} },
    ]);
  }

  async findOne(id: string) {
    const level = await this.adminLevelRepository.findOne({ _id: id });
    if (!level) throw new NotFoundException("Not found any level document");
    return level
  }

  async update(id: string, updateLevelDto: UpdateLevelDto) {
    const level = await this.findOne(id);
    const updateLevelResult = await this.adminLevelRepository.updateOne(
      { _id: id },
      { $set: updateLevelDto }
    );
    if (updateLevelResult.modifiedCount == 0) throw new BadRequestException("updated failed");
    return updateLevelResult;

  }

  async remove(id: string) {
    const level = await this.findOne(id);
    const deletedResult = await this.adminLevelRepository.deleteOne({ _id: id });
    if (deletedResult.deletedCount == 0) throw new BadRequestException("deleted was failed");
    await this.adminRoomRepository.updateMany({ level: id }, { $set: { level: undefined } })
    return true
  }
}
