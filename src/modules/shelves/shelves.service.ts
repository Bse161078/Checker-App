import {Inject, Injectable, NotFoundException, Scope} from '@nestjs/common';
import {REQUEST} from '@nestjs/core';
import {InjectModel} from '@nestjs/mongoose';
import {Request} from 'express';
import {Model, Types} from 'mongoose';
import {getObjectFiles, parseValue} from 'src/common/utils/functions';
import {CreateShelvesDto} from './dto/create-shelf.dto';
import {ShelvesDto} from './dto/shelves.dto';
import {Shelves, ShelvesDocument} from './entities/shelves.entity';
import {IShelvesFilesUpload} from './interfaces/files.interface';

@Injectable({scope: Scope.REQUEST})
export class ShelvesService {
    constructor(
        @Inject(REQUEST) private request: any,
        @InjectModel(Shelves.name) private shelvesRepository: Model<ShelvesDocument>
    ) {
    }

    async create(createShelvesDto: CreateShelvesDto | any, files: IShelvesFilesUpload) {
        const {hotel, _id: checker} = this.request.user;
        const shelves = await this.findOneShelves(createShelvesDto.room);
        createShelvesDto = parseValue(createShelvesDto)
        const newFile: any = getObjectFiles(files);
        const newDto: ShelvesDto = {
            topQuestion: {
                value: createShelvesDto.topQuestionStatus,
                samplePhoto: newFile.samplePhotoTopQuestion,
            },
            comments: {
                wiped: {
                    status: createShelvesDto.tableNotCleanStatus,
                    photos: newFile.tableNotCleanPhotos
                },
                tableNotClean: {
                    status: createShelvesDto.tableNotCleanStatus,
                    photos: newFile.tableNotCleanPhotos
                },
                sideTableNotClean: {
                    status: createShelvesDto.tableNotCleanStatus,
                    photos: newFile.tableNotCleanPhotos
                },
                tv: {
                    status: createShelvesDto.tableNotCleanStatus,
                    photos: newFile.tableNotCleanPhotos
                },
                window: {
                    status: createShelvesDto.tableNotCleanStatus,
                    photos: newFile.tableNotCleanPhotos
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
            const updatedResult = await this.shelvesRepository.updateOne({_id: shelves._id}, {$set: newDto})
        } else {
            const createdResult = await this.shelvesRepository.create(newDto)
        }
        return true
    }

    async getShelvesStatus(room: Types.ObjectId) {
        const shelves = await this.findOneShelves(room);
        if (shelves) return shelves;
        throw new NotFoundException("still not fill shelves status")
    }

    async findOneShelves(room: Types.ObjectId) {
        const shelves = await this.shelvesRepository.findOne({room});
        return shelves;
    }
}
