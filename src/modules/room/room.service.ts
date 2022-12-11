import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, Types } from 'mongoose';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room, RoomDocument } from './entities/room.entity';

@Injectable()
export class AdminRoomService {
  constructor(
    @InjectModel(Room.name) private readonly adminRoomRepository: Model<RoomDocument>
  ) { }
  async create(createRoomDto: CreateRoomDto) {
    createRoomDto.level = new Types.ObjectId(createRoomDto.level)
    const createdResult = await this.adminRoomRepository.create(createRoomDto);
    return createdResult
  }

  async findAll(filter: FilterQuery<RoomDocument> = {}) {
    const rooms = await this.adminRoomRepository.aggregate([
      {
        $match: filter
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
}
