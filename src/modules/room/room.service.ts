import {BadRequestException, Inject, Injectable, NotFoundException, Scope} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {FilterQuery, Model, Types} from 'mongoose';
import {CreateRoomDto} from './dto/create-room.dto';
import {UpdateRoomDto} from './dto/update-room.dto';
import {Room, RoomDocument} from './entities/room.entity';
import {REQUEST} from '@nestjs/core';
import {Request} from 'express';
import {ROLES} from 'src/common/enums/role.enum';
import {SearchRoom, SendAlertDto, SetRoomStatus, StartCleaningDto, UpdateCleaningStatus} from './dto/send-alert.dto';
import {CleaningHistoryDocument} from './entities/cleaning-history.entity';
import {CheckerRoomStatus, RoomStatus} from './enum/room-type.enum';
import {RoomType, RoomTypeDocument} from "../room-type/entities/room-type.entity";
import {ROOM_STATUS} from "../../common/enums/room-status.enum";
import {CreateFloorDto} from "../floor/dto/create-floor.dto";
import {IFloorFilesUpload} from "../floor/interfaces/files.interface";
import {getObjectFiles, parseValue} from "../../common/utils/functions";
import {FloorDto} from "../floor/dto/floor.dto";
import {MistakesFileUpload} from "./interfaces/files.interface";
import {PostMistakesDto} from "./dto/room.dto";

@Injectable({scope: Scope.REQUEST})
export class AdminRoomService {
    constructor(
        @InjectModel(Room.name) private readonly adminRoomRepository: Model<RoomDocument>,
        @InjectModel("cleaninghistories") private readonly cleaningHistoryRepository: Model<CleaningHistoryDocument>,
        @InjectModel(RoomType.name) private roomtypeRepository: Model<RoomTypeDocument>,
        @Inject(REQUEST) private request: any
    ) {
    }

    async create(createRoomDto: CreateRoomDto) {
        const roomType:any = await this.roomtypeRepository.findById(new Types.ObjectId(createRoomDto.roomType));
        if (roomType) {
            const user = this.request.user;
            createRoomDto.level = new Types.ObjectId(createRoomDto.level);
            createRoomDto.roomType = roomType.title;
            createRoomDto.hotel = new Types.ObjectId(createRoomDto.hotel);
            const createdResult = await this.adminRoomRepository.create(createRoomDto);
            return createdResult

        } else {
            throw new NotFoundException("room type not found")
        }
    }

    async findAll(filter: FilterQuery<RoomDocument> = {}) {
        const user = this.request.user;
        if (user.role == ROLES.HOTELADMIN) filter['hotel'] = user._id;
        else if (user.hotel) filter['hotel'] = user.hotel._id;
        else return []
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
                    __v: 0
                }
            }
        ]);
        return rooms;
    }

    async findOne(id: string) {
        const room = (await this.findAll({_id: new Types.ObjectId(id)}))?.[0]
        if (!room) throw new NotFoundException("Not found any room ");
        return room;
    }

    async update(id: string, updateRoomDto: UpdateRoomDto) {
        const room = await this.findOne(id);
        const updatedResult = await this.adminRoomRepository.updateOne({_id: id}, {
            $set: updateRoomDto
        })
        if (updatedResult.modifiedCount == 0) throw new BadRequestException("updated failed");
        return updatedResult
    }

    async remove(id: string) {
        const deletedResult = await this.adminRoomRepository.deleteOne({_id: id});
        if (deletedResult.deletedCount == 0) throw new BadRequestException("deleted was failed");
        return deletedResult
    }

    async sendAlert(sendAlertDto: SendAlertDto) {
        const {roomID, status} = sendAlertDto;
        await this.adminRoomRepository.updateOne({_id: roomID}, {
            $set: {report: status}
        })
        return {
            message: "set room report successfully"
        }
    }

    async startRoomCleaning(startCleaning: StartCleaningDto) {
        const {roomId} = startCleaning;
        const user = this.request.user;
        let cleaner: any;
        if (user.role == ROLES.CLEANER) cleaner = user._id;

        const room = await this.adminRoomRepository.findOne({_id: roomId});

        if (room) {

            await this.adminRoomRepository.updateOne({_id: roomId}, {cleaning_status: CheckerRoomStatus.IN_PROGRESS});


            const cleaningHistory = await this.cleaningHistoryRepository.create({
                room: new Types.ObjectId(room._id), cleaner: new Types.ObjectId(cleaner),
                cleaningStartAt: new Date().toUTCString(),
                status: ROOM_STATUS.IN_PROGRESS,
                checkerStatus:CheckerRoomStatus.IN_PROGRESS
            });

            return {
                message: "cleaning history created",
                data: cleaningHistory
            }
        } else {
            throw new NotFoundException("invalid request")
        }
    }


    async updateCleaningStatus(updateCleaningStatus: UpdateCleaningStatus) {
        const {cleaningHistoryId, status} = updateCleaningStatus;
        const user = this.request.user;

        const cleaningHistory = await this.cleaningHistoryRepository.findById(new Types.ObjectId(cleaningHistoryId));
        if (cleaningHistory && status !== ROOM_STATUS.START) {
            cleaningHistory.set({status, cleaningEndAt: new Date().toUTCString(),checkerStatus:CheckerRoomStatus.IN_PROGRESS});
            await cleaningHistory.save();
            return cleaningHistory;
        } else {
            throw new NotFoundException("invalid request")
        }
        return {
            message: "room hisstory updated"
        }
    }

    async setRoomStatus(setRoomStatusDto: SetRoomStatus) {
        const {roomId, clean_status, occupation_status,price} = setRoomStatusDto;
        const user = this.request.user;
        let checker: any;
        if (user.role == ROLES.CHECKER) checker = user._id;
        const room = await this.adminRoomRepository.findOne({_id: roomId});

        if (room) {
            await this.adminRoomRepository.updateOne({_id: roomId}, {cleaning_status: clean_status, occupation_status});
            await this.cleaningHistoryRepository.updateMany({room: room._id, checker: null}, {
                checker: checker,
                checkerStatus: clean_status,
                price
            })
        } else {
            throw new NotFoundException("invalid request")
        }

        return {
            message: "set room status successfully"
        }
    }

    async search(search: SearchRoom) {

        const user = this.request.user;
        let hotel;
        if (user.role == ROLES.HOTELADMIN) hotel = new Types.ObjectId(user._id);
        else hotel = user.hotel._id;


        const rooms = await this.adminRoomRepository.find({
            hotel: hotel,
            $or: [
                {roomType: {"$in": search.type}},
                {cleaning_status: {"$in": search.cleaning_status || []}},
                {occupation_status: {"$in": search.occupation_status || []}}
            ]
        });
        return rooms;
    }


    async setMistakes(mistakeDto: PostMistakesDto & any, files: MistakesFileUpload) {

        const user = this.request.user;
        let checker: any;
        if (user.role == ROLES.CHECKER) checker = user._id;
        else throw new NotFoundException("invalid request")

        const room = await this.adminRoomRepository.findOne({_id: mistakeDto.roomId});


        const newFile: any = getObjectFiles(files);
        const newMistakes: any = {
            roomIsNotVacuumed: {
                status: mistakeDto.roomIsNotVacuumedStatus && (mistakeDto.roomIsNotVacuumedStatus).toLowerCase()==="true" ,
                text: "",
                photos: newFile.roomIsNotVacuumedPhotos
            },
            roomHasStrongStainsThatCanNotBeCleanedByUs: {
                status: mistakeDto.roomHasStrongStainsThatCanNotBeCleanedByUsStatus && (mistakeDto.roomHasStrongStainsThatCanNotBeCleanedByUsStatus).toLowerCase()==="true",
                text: "",
                photos: newFile.roomHasStrongStainsThatCanNotBeCleanedByUsPhotos
            },
            damageCausedByGuests: {
                status: mistakeDto.damageCausedByGuestsStatus && (mistakeDto.damageCausedByGuestsStatus).toLowerCase()==="true",
                text: "",
                photos: newFile.damageCausedByGuestsPhotos
            },
            report: {
                status: mistakeDto.reportStatus && (mistakeDto.reportStatus).toLowerCase()==="true",
                text: "",
                photos: newFile.reportPhotos
            }
        }


        if (room) {
            const cleaningStatus=await this.cleaningHistoryRepository.updateMany({room: mistakeDto.roomId, checker: null}, {
                mistakes:newMistakes,
            });
            return cleaningStatus;

        } else {
            throw new NotFoundException("invalid request")
        }
    }


    async createRoomReport() {
        const user = this.request.user;

        const rooms = await this.adminRoomRepository.find({hotel: user._id})
        const roomIds = rooms.map((room) => room._id);
        const roomHistories = (await this.cleaningHistoryRepository.find({room: {"$in": roomIds}}).populate('cleaner')
            .populate({
                path:"room",
                populate:{
                    path:"hotel"
                }
            }).lean()).filter((history) => history.cleaner).filter((history) => history.room);
        const cleanersUsed = roomHistories.map(item => (item.cleaner._id).toString())
            .filter((value, index, self) => self.indexOf(value) === index);
        const roomsUsed = roomHistories.map(item => (item.room._id).toString())
            .filter((value, index, self) => self.indexOf(value) === index);
        const roomsCleaned = roomHistories.filter((room) => room.checkerStatus === CheckerRoomStatus.Cleaned);
        const roomsInProgress = roomHistories.filter((room) => room.checkerStatus === CheckerRoomStatus.IN_PROGRESS);
        const roomsNotCleaned = roomHistories.filter((room) => room.checkerStatus === CheckerRoomStatus.NotCleaned);
        const roomDamaged = roomHistories.filter((room) => room.checkerStatus === CheckerRoomStatus.Damaged);

        let cleanersReport: any = [];
        let roomsReport: any = [];

        for (let i = 0; i < cleanersUsed.length; i++) {
            const cleaner: any = cleanersUsed[i];
            const cleanerReport = roomHistories.filter((report) => (report.cleaner._id).toString() === (cleaner).toString());
            const rooms = cleanerReport.map((report:any) => {
                const room=report.room;
                const {extraAdult,extraChild}=room.hotel.price || {};
                const roomReport=room.report;
                let extra=false;
                let roomPrice=room.price;
                if(room.report.indexOf(RoomStatus.ExtraBedNormal)){
                    roomPrice+=extraAdult;
                    extra=true;
                }
                if(room.report.indexOf(RoomStatus.ExtraBedChild)){
                    roomPrice+=extraChild;
                    extra=true;
                }

                return {...report.room,mistakes:report.mistakes,price:roomPrice,extra}
            });

            const extra = rooms.filter((room: any) => room.extra);
            const mistakesCount = rooms.reduce((partialSum:any, room:any) => {
                if(room.mistakes && room.mistakes.roomIsNotVacuumed && room.mistakes.roomIsNotVacuumed.status){
                    partialSum+=1;
                }

                if(room.mistakes &&  room.mistakes.roomIsNotVacuumed && room.mistakes.roomIsNotVacuumed.status){
                    partialSum+=1;
                }

                if(room.mistakes && room.mistakes.report && room.mistakes.report.status){
                    partialSum+=1;
                }

                if(room.mistakes && room.mistakes.roomHasStrongStainsThatCanNotBeCleanedByUs && room.mistakes.roomHasStrongStainsThatCanNotBeCleanedByUs.status){
                    partialSum+=1;
                }


                if( room.mistakes && room.mistakes.damageCausedByGuests && room.mistakes.damageCausedByGuests.status){
                    partialSum+=1;
                }
                return partialSum
            },0);

            let data = {...cleanerReport[0].cleaner, extra: extra.length,mistakesCount, rooms,};
            cleanersReport.push(data);
        }

        for (let i = 0; i < roomsUsed.length; i++) {
            const room: any = roomsUsed[i];
            const roomReport = roomHistories.filter((report) => (report.room._id).toString() === (room).toString());
            const cleaners = roomReport.map((report) => ({...report.cleaner,mistakes:report.mistakes,price:report.price}));

            const mistakesCount = cleaners.reduce((partialSum:any, room:any) => {
                if(room.mistakes && room.mistakes.roomIsNotVacuumed && room.mistakes.roomIsNotVacuumed.status){
                    partialSum+=1;
                }

                if(room.mistakes &&  room.mistakes.roomIsNotVacuumed && room.mistakes.roomIsNotVacuumed.status){
                    partialSum+=1;
                }

                if(room.mistakes && room.mistakes.report && room.mistakes.report.status){
                    partialSum+=1;
                }

                if(room.mistakes && room.mistakes.roomHasStrongStainsThatCanNotBeCleanedByUs && room.mistakes.roomHasStrongStainsThatCanNotBeCleanedByUs.status){
                    partialSum+=1;
                }


                if( room.mistakes && room.mistakes.damageCausedByGuests && room.mistakes.damageCausedByGuests.status){
                    partialSum+=1;
                }
                return partialSum
            },0);

            let data: any = {...roomReport[0].room,mistakesCount, cleaners};
            roomsReport.push(data);
        }


        return {
            cleanersUsed: cleanersUsed.length,
            roomsCleaned: roomsCleaned.length,
            roomsInProgress: roomsInProgress.length,
            roomsNotCleaned: roomsNotCleaned.length,
            roomsDamaged: roomDamaged.length,
            notDamaged: roomHistories.length - roomDamaged.length,
            cleanersReport,
            roomsReport
        }
    }


}
