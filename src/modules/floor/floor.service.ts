import { Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { Model, Types } from 'mongoose';
import { getObjectFiles, parseValue } from 'src/common/utils/functions';
import { CreateFloorDto } from './dto/create-floor.dto';
import { FloorDto } from './dto/floor.dto';
import { Floor, FloorDocument } from './entities/floor.entity';
import { IFloorFilesUpload } from './interfaces/files.interface';

@Injectable({ scope: Scope.REQUEST })
export class FloorService {
  constructor(
    @Inject(REQUEST) private request: Request,
    @InjectModel(Floor.name) private floorRepository: Model<FloorDocument>
  ) { }
  async create(createFloorDto: CreateFloorDto & any, files: IFloorFilesUpload) {
    const { hotel, _id: checker } = this.request.user;
    const floor = await this.findOneFloor(createFloorDto.room);
    createFloorDto = parseValue(createFloorDto)
    const newFile: any = getObjectFiles(files);
    const newDto: FloorDto = {
      topQuestion: {
        value: createFloorDto.topQuestionStatus,
        samplePhoto: newFile.samplePhotoTopQuestion,
      },
      comments: {
        roomIsNotVacuumed: {
          status: createFloorDto.roomIsNotVacuumedStatus,
          photos: newFile.roomIsNotVacuumedPhotos
        },
        roomHasStrongStainsThatCanNotBeCleanedByUs: {
          status: createFloorDto.roomHasStrongStainsThatCanNotBeCleanedByUsStatus,
          photos: newFile.roomHasStrongStainsThatCanNotBeCleanedByUsPhotos,
        },
        DamageCausedByGuests: {
          status: createFloorDto.DamageCausedByGuestsStatus,
          photos: newFile.DamageCausedByGuestsPhotos,
        }
      },
      checker,
      hotel: new Types.ObjectId(hotel),
      room: createFloorDto.room,
      damage: {
        text: createFloorDto.DamageReportText,
        photos: newFile.DamageReportPhotos
      }
    }
    if (floor) {
      const updatedResult = await this.floorRepository.updateOne({ _id: floor._id }, { $set: newDto })
    } else {
      const createdResult = await this.floorRepository.create(newDto)
    }
    return true
  }

  async getFloorStatus(room: Types.ObjectId) {
    const floor = await this.findOneFloor(room);
    if (floor) return floor;
    throw new NotFoundException("still not fill floor status")
  }

  async findOneFloor(room: Types.ObjectId) {
    const floor = await this.floorRepository.findOne({ room });
    return floor;
  }

}
