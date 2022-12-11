import { Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { Model, Types } from 'mongoose';
import { getObjectFiles, parseValue } from 'src/common/utils/functions';
import { BathRoomDto } from './dto/bathroom.dto';
import { CreateBathroomDto } from './dto/create-bathroom.dto';
import { BathRoom, BathRoomDocument } from './entities/bathroom.entity';
import { IBathRoomFilesUpload } from './interfaces/files.interface';

@Injectable({ scope: Scope.REQUEST })
export class BathroomService {
  constructor(
    @Inject(REQUEST) private request: Request,
    @InjectModel(BathRoom.name) private bathroomRepository: Model<BathRoomDocument>
  ) { }
  async create(createBathroomDto: CreateBathroomDto | any, files: IBathRoomFilesUpload) {
    const { hotel, _id: checker } = this.request.user;
    const { room } = createBathroomDto;
    const bathroom = await this.findOneByCheckerAndHotel(room);
    createBathroomDto = parseValue(createBathroomDto)
    const newFile: any = getObjectFiles(files);
    const newDto: BathRoomDto = {
      topQuestion: {
        value: createBathroomDto.topQuestionStatus,
        samplePhoto: newFile.samplePhotoTopQuestion,
      },
      comments: {
        tilesAreNotMopped: {
          status: createBathroomDto.tilesAreNotMoppedStatus,
          photos: newFile.tilesAreNotMoppedPhotos
        },
        toiletIsNotWiped: {
          status: createBathroomDto.toiletIsNotWipedStatus,
          photos: newFile.toiletIsNotWipedPhotos,
        },
        thereIsDirtInTheShowe: {
          status: createBathroomDto.thereIsDirtInTheShoweStatus,
          photos: newFile.thereIsDirtInTheShowePhotos,
        },
        shelvesAreNotWiped: {
          status: createBathroomDto.shelvesAreNotWipedStatus,
          photos: newFile.shelvesAreNotWipedPhotos,
        },
        traysAreNotFilled: {
          status: createBathroomDto.traysAreNotFilledStatus,
          photos: newFile.traysAreNotFilledPhotos,
        }
      },
      checker,
      room: createBathroomDto.room,
      hotel: new Types.ObjectId(hotel),
      damage: {
        text: createBathroomDto.DamageReportText,
        photos: newFile.DamageReportPhotos
      }
    }
    if (bathroom) {
      await this.bathroomRepository.updateOne({ _id: bathroom._id }, { $set: newDto })
    } else {
      await this.bathroomRepository.create(newDto)
    }
    return true
  }
  async getBathRoomStatus(room: Types.ObjectId) {
    const bathroom = await this.findOneByCheckerAndHotel(room);
    if (bathroom) return bathroom;
    throw new NotFoundException("still not fill bathroom status")
  }

  async findOneByCheckerAndHotel(room: Types.ObjectId) {
    const bathroom = await this.bathroomRepository.findOne({ room });
    return bathroom;
  }
}
