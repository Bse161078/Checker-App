import { Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { Model, Types } from 'mongoose';
import { getObjectFiles, parseValue } from 'src/common/utils/functions';
import { CreateShelvesDto } from './dto/create-shelf.dto';
import { ShelvesDto } from './dto/shelves.dto';
import { Shelves, ShelvesDocument } from './entities/shelves.entity';
import { IShelvesFilesUpload } from './interfaces/files.interface';

@Injectable({ scope: Scope.REQUEST })
export class ShelvesService {
  constructor(
    @Inject(REQUEST) private request: Request,
    @InjectModel(Shelves.name) private shelvesRepository: Model<ShelvesDocument>

  ) { }
  async create(createShelvesDto: CreateShelvesDto | any, files: IShelvesFilesUpload) {
    const { hotel, _id: checker } = this.request.user;
    const shelves = await this.findOneByCheckerAndHotel();
    createShelvesDto = parseValue(createShelvesDto)
    const newFile: any = getObjectFiles(files);
    const newDto: ShelvesDto = {
      topQuestion: {
        value: createShelvesDto.topQuestionStatus,
        samplePhoto: newFile.samplePhotoTopQuestion,
      },
      comments: {
        tableNotClean: {
          status: createShelvesDto.tableNotCleanStatus,
          photos: newFile.tableNotCleanPhotos
        },
        sideTableNotClean: {
          status: createShelvesDto.sideTableNotCleanStatus,
          photos: newFile.sideTableNotCleanPhotos,
        },
        tvStandNotClean: {
          status: createShelvesDto.tvStandNotCleanStatus,
          photos: newFile.tvStandNotCleanPhotos,
        },
        cabinetTopAndInsideSurfacesNotClean: {
          status: createShelvesDto.cabinetTopAndInsideSurfacesNotCleanStatus,
          photos: newFile.cabinetTopAndInsideSurfacesNotCleanPhotos,
        },
        windowSillNotClean: {
          status: createShelvesDto.windowSillNotCleanStatus,
          photos: newFile.windowSillNotCleanPhotos,
        },
        BrochuresNotNeatlyAndSortedInTheirPlace: {
          status: createShelvesDto.BrochuresNotNeatlyAndSortedInTheirPlaceStatus,
          photos: newFile.BrochuresNotNeatlyAndSortedInTheirPlacePhotos,
        }
      },
      checker,
      hotel: new Types.ObjectId(hotel),
      room: createShelvesDto.room,
      damage: {
        text: createShelvesDto.DamageReportText,
        photos: newFile.DamageReportPhotos
      }
    }
    if (shelves) {
      const updatedResult = await this.shelvesRepository.updateOne({ _id: shelves._id }, { $set: newDto })
    } else {
      const createdResult = await this.shelvesRepository.create(newDto)
    }
    return true
  }
  async getFloorStatus() {
    const shelves = await this.findOneByCheckerAndHotel();
    if (shelves) return shelves;
    throw new NotFoundException("still not fill floor status")
  }

  async findOneByCheckerAndHotel() {
    const { hotel, _id: checker } = this.request.user;
    const shelves = await this.shelvesRepository.findOne({ hotel, checker });
    return shelves;
  }
}
