import { BadRequestException, Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { CreateRoomTypeDto } from './dto/create-room-type.dto';
import { UpdateRoomTypeDto } from './dto/update-room-type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RoomType, RoomTypeDocument } from './entities/room-type.entity';
import { Model, Types } from 'mongoose';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { removeEmptyFieldsObject } from 'src/common/utils/functions';
import { Room, RoomDocument } from '../room/entities/room.entity';

@Injectable({ scope: Scope.REQUEST })
export class RoomTypeService {
  constructor(
    @InjectModel(RoomType.name) private roomtypeRepository: Model<RoomTypeDocument>,
    @InjectModel(Room.name) private roomRepository: Model<RoomDocument>,
    @Inject(REQUEST) private request: Request
  ) { }
  async create(createRoomTypeDto: CreateRoomTypeDto) {
    const user = this.request.user;
    const { title } = createRoomTypeDto;
    const hotel = new Types.ObjectId(user._id)
    const createdResult = await this.roomtypeRepository.create({
      title,
      hotel
    });
    return createdResult
  }

  async findAll() {
    const roomTypes = await this.roomtypeRepository.find({});
    return roomTypes;
  }

  async findOne(_id: string) {
    const user = this.request.user;
    const roomType = await this.roomtypeRepository.findOne({ _id, hotel: user._id })
    if (!roomType) throw new NotFoundException("not found any room type");
    return roomType;
  }

  async update(id: string, updateRoomTypeDto: UpdateRoomTypeDto) {
    const roomType = await this.findOne(id);
    updateRoomTypeDto = removeEmptyFieldsObject(updateRoomTypeDto)
    const updatedResult = await this.roomtypeRepository.updateOne({ _id: id }, {
      $set: updateRoomTypeDto
    });
    if(updatedResult.modifiedCount) throw new BadRequestException("No new changes were registered");
    return updatedResult;
  }

  async remove(id: string) {
    const roomType = await this.findOne(id);
    const deletedResult = await this.roomtypeRepository.deleteOne({_id: id});
    if(deletedResult.deletedCount == 0 )throw new BadRequestException("deleted room type failed");
    await this.roomRepository.updateMany({roomType : roomType._id}, {$unset: {roomType: ""}});
    return true;
  }
}
