import { Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { Model, Types } from 'mongoose';
import { getObjectFiles, parseValue } from 'src/common/utils/functions';
import { BedDto } from './dto/bed.dto';
import { CreateBedDto } from './dto/create-bed.dto';
import { UpdateBedDto } from './dto/update-bed.dto';
import { Bed, BedDocument } from './entities/bed.entity';
import { IBedFilesUpload } from './interfaces/files.interface';

@Injectable({scope: Scope.REQUEST})
export class BedService {
  constructor(
    @Inject(REQUEST) private request: Request,
    @InjectModel(Bed.name) private bedRepository: Model<BedDocument>
  ) { }
  async create(createBedDto: CreateBedDto | any, files: IBedFilesUpload) {
    const { hotel, _id: checker } = this.request.user;
    const { room } = createBedDto;
    const bed = await this.findOneBed(room);
    createBedDto = parseValue(createBedDto)
    const newFile: any = getObjectFiles(files);
    const newDto: BedDto = {
      topQuestion: {
        value: createBedDto.topQuestionStatus,
        samplePhoto: newFile.samplePhotoTopQuestion,
      },
      comments: {
        bedDoesNotLookFresh: {
          status: createBedDto.bedDoesNotLookFreshStatus,
          photos: newFile.bedDoesNotLookFreshPhotos
        },
        bedSheetInNotProperlyTightened: {
          status: createBedDto.bedSheetInNotProperlyTightenedStatus,
          photos: newFile.bedSheetInNotProperlyTightenedPhotos,
        },
      },
      checker,
      hotel: new Types.ObjectId(hotel),
      room: createBedDto.room,
      damage: {
        text: createBedDto.DamageReportText,
        photos: newFile.DamageReportPhotos
      }
    }
    if (bed) {
      await this.bedRepository.updateOne({ _id: bed._id }, { $set: newDto })
    } else {
      await this.bedRepository.create(newDto)
    }
    return true
  }
  async getBedStatus(room: Types.ObjectId) {
    const bed = await this.findOneBed(room);
    if (bed) return bed;
    throw new NotFoundException("still not fill bed status")
  }

  async findOneBed(room: Types.ObjectId) {
    const bed = await this.bedRepository.findOne({ room });
    return bed;
  }
}
