import { Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { Model, Types } from 'mongoose';
import { getObjectFiles, parseValue } from 'src/common/utils/functions';
import { BethRoomDto } from './dto/bethroom.dto';
import { CreateBethroomDto } from './dto/create-bethroom.dto';
import { BethRoom, BethRoomDocument } from './entities/bethroom.entity';
import { IBethRoomFilesUpload } from './interfaces/files.interface';

@Injectable({ scope: Scope.REQUEST })
export class BethroomService {
  constructor(
    @Inject(REQUEST) private request: Request,
    @InjectModel(BethRoom.name) private bethroomRepository: Model<BethRoomDocument>
  ) { }
  async create(createBethroomDto: CreateBethroomDto | any, files: IBethRoomFilesUpload) {
    const { hotel, _id: checker } = this.request.user;
    const bethroom = await this.findOneByCheckerAndHotel();
    createBethroomDto = parseValue(createBethroomDto)
    const newFile: any = getObjectFiles(files);
    const newDto: BethRoomDto = {
      topQuestion: {
        value: createBethroomDto.topQuestionStatus,
        samplePhoto: newFile.samplePhotoTopQuestion,
      },
      comments: {
        tilesAreNotMopped: {
          status: createBethroomDto.tilesAreNotMoppedStatus,
          photos: newFile.tilesAreNotMoppedPhotos
        },
        toiletIsNotWiped: {
          status: createBethroomDto.toiletIsNotWipedStatus,
          photos: newFile.toiletIsNotWipedPhotos,
        },
        thereIsDirtInTheShowe: {
          status: createBethroomDto.thereIsDirtInTheShoweStatus,
          photos: newFile.thereIsDirtInTheShowePhotos,
        },
        shelvesAreNotWiped: {
          status: createBethroomDto.shelvesAreNotWipedStatus,
          photos: newFile.shelvesAreNotWipedPhotos,
        },
        traysAreNotFilled: {
          status: createBethroomDto.traysAreNotFilledStatus,
          photos: newFile.traysAreNotFilledPhotos,
        }
      },
      checker,
      hotel: new Types.ObjectId(hotel),
      damage: {
        text: createBethroomDto.DamageReportText,
        photos: newFile.DamageReportPhotos
      }
    }
    if (bethroom) {
      const updatedResult = await this.bethroomRepository.updateOne({ _id: bethroom._id }, { $set: newDto })
    } else {
      const createdResult = await this.bethroomRepository.create(newDto)
    }
    return true
  }
  async getBethRoomStatus() {
    const floor = await this.findOneByCheckerAndHotel();
    if (floor) return floor;
    throw new NotFoundException("still not fill floor status")
  }

  async findOneByCheckerAndHotel() {
    const { hotel, _id: checker } = this.request.user;
    const bethroom = await this.bethroomRepository.findOne({ hotel, checker });
    return bethroom;
  }
}
