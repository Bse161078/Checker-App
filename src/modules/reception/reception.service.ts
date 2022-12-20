import { Inject, Injectable, Scope } from '@nestjs/common';
import { CreateReceptionDto } from './dto/create-reception.dto';
import { UpdateReceptionDto } from './dto/update-reception.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Room, RoomDocument } from '../room/entities/room.entity';
import { Model } from 'mongoose';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { Cleaner } from '../cleaner/entities/cleaner.entity';
import { UserDocument } from '../user/entities/user.entity';

@Injectable({scope: Scope.REQUEST})
export class ReceptionService {
  constructor(
    @InjectModel(Room.name) private roomRepository: Model<RoomDocument>,
    @InjectModel(Cleaner.name) private cleanerRepository: Model<UserDocument>,
    @Inject(REQUEST) private request: Request
  ){

  }
  create(createReceptionDto: CreateReceptionDto) {
    return 'This action adds a new reception';
  }

  async getRooms() {
    const user = this.request.user;
    const hotel = user.hotel;
    const rooms = await this.roomRepository.find({hotel}, {status: 1, report: 1, name: 1, hotel: 1});
    return rooms;
  }

  async getCleaners(id: number) {
    const user = this.request.user;
    const hotel = user.hotel;

  }

}
