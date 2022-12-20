import { BadRequestException, Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, Types } from 'mongoose';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room, RoomDocument } from './entities/room.entity';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { ROLES } from 'src/common/enums/role.enum';
import { SendAlertDto, SetRoomStatus } from './dto/send-alert.dto';
import { CleaningHistoryDocument } from './entities/cleaning-history.entity';
import { CheckerRoomStatus } from './enum/room-type.enum';

@Injectable({ scope: Scope.REQUEST })
export class AdminRoomService {
  constructor(
    @InjectModel(Room.name) private readonly adminRoomRepository: Model<RoomDocument>,
    @InjectModel(Room.name) private readonly cleaningHistoryRepository: Model<CleaningHistoryDocument>,
    @Inject(REQUEST) private request: Request
  ) { }
  async create(createRoomDto: CreateRoomDto) {
    const user = this.request.user;
    createRoomDto.level = new Types.ObjectId(createRoomDto.level)
    if (user.hotel) createRoomDto.hotel = user.hotel;
    if (user.role == ROLES.HOTELADMIN) createRoomDto.hotel = user._id;
    createRoomDto.roomType = new Types.ObjectId(createRoomDto.roomType)
    const createdResult = await this.adminRoomRepository.create(createRoomDto);
    return createdResult
  }

  async findAll(filter: FilterQuery<RoomDocument> = {}) {
    const user = this.request.user;
    if (user.role == ROLES.HOTELADMIN) filter['hotel'] = user._id;
    else if (user.hotel) filter['hotel'] = user.hotel;
    else return []
    const rooms = await this.adminRoomRepository.aggregate([
      {
        $match: filter
      },
      {

        $lookup: {
          from: "roomtypes",
          foreignField: "_id",
          localField: "roomType",
          as: "roomType"
        },
      },
      {

        $lookup: {
          from: "levels",
          foreignField: "_id",
          localField: "level",
          as: "level"
        },
      },
      {
        $lookup: {
          from: "bathrooms",
          foreignField: "room",
          localField: "_id",
          as: "bathroom"
        },
      },
      {
        $lookup: {
          from: "beds",
          foreignField: "room",
          localField: "_id",
          as: "bed"
        },
      },
      {
        $lookup: {
          from: "floors",
          foreignField: "room",
          localField: "_id",
          as: "floor"
        },
      },
      {
        $lookup: {
          from: "shelves",
          foreignField: "room",
          localField: "_id",
          as: "floor"
        },
      },
      {
        $lookup: {
          from: "curtains",
          foreignField: "room",
          localField: "_id",
          as: "curtain"
        },
      },
      {
        $unwind: "$level"
      },
      {
        $unwind: {
          path: "$roomType",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $unwind: {
          path: "$bathroom",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $unwind: {
          path: "$bed",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $unwind: {
          path: "$floor",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $unwind: {
          path: "$shelves",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $unwind: {
          path: "$curtain",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $project: {
          "level.__v": 0,
          "level.hotel": 0,
          "roomType.hotel": 0,
          "roomType.__v": 0,
          __v: 0
        }
      }
    ]);
    return rooms;
  }

  async findOne(id: string) {
    const room = (await this.findAll({ _id: new Types.ObjectId(id) }))?.[0]
    if (!room) throw new NotFoundException("Not found any room ");
    return room;
  }

  async update(id: string, updateRoomDto: UpdateRoomDto) {
    const room = await this.findOne(id);
    const updatedResult = await this.adminRoomRepository.updateOne({ _id: id }, {
      $set: updateRoomDto
    })
    if (updatedResult.modifiedCount == 0) throw new BadRequestException("updated failed");
    return updatedResult
  }

  async remove(id: string) {
    const deletedResult = await this.adminRoomRepository.deleteOne({ _id: id });
    if (deletedResult.deletedCount == 0) throw new BadRequestException("deleted was failed");
    return deletedResult
  }

  async sendAlert(sendAlertDto: SendAlertDto) {
    const { roomID, status } = sendAlertDto;
    await this.adminRoomRepository.updateOne({ _id: roomID }, {
      $set: { report: status }
    })
    return {
      message: "set room report successfully"
    }
  }
  async setRoomStatus(setRoomStatusDto: SetRoomStatus) {
    const { roomID, status } = setRoomStatusDto;
    const user = this.request.user;
    let checker: any;
    if (user.role == ROLES.CHECKER) checker = user._id;
    const room = await this.adminRoomRepository.findOne({ _id: roomID })
    await this.adminRoomRepository.updateOne({ _id: roomID }, {
      $set: { status }
    })
    await this.cleaningHistoryRepository.updateOne({
      cleaner: room.cleaner,
      room: room._id,
      checkerStatus: "no-status"
    }, {
      $set: { checkerStatus: status, checker }
    })
    return {
      message: "set room status successfully"
    }
  }
}
