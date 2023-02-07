import {BadRequestException, Inject, Injectable, NotFoundException} from '@nestjs/common';
import {AddCompanyToHotel, CreateHotelDto} from './dto/create-hotel.dto';
import {InjectModel} from '@nestjs/mongoose';
import {User, UserDocument} from '../user/entities/user.entity';
import {Model, Types} from 'mongoose';
import {ROLES} from 'src/common/enums/role.enum';
import {AuthService} from '../auth/services/auth.service';
import {
    CreateHotelCheckerDto,
    CreateHotelCleanerDto,
    CreateHotelReceptionDto,
    UpdateHotelLogoDto
} from './dto/hotel.dto';
import {REQUEST} from "@nestjs/core";

@Injectable()
export class HotelService {
    constructor(
        @InjectModel(User.name) private userRepository: Model<UserDocument>,
        @InjectModel("hotel-logos") private hotelLogoModel: Model<UserDocument>,
        @Inject(REQUEST) private request: any,
        private authService: AuthService
    ) {
    }

    async create(createHotelDto: CreateHotelDto) {
        createHotelDto.password = this.authService.hashPassword(createHotelDto.password);
        createHotelDto.role = ROLES.HOTELADMIN;
        let hotel = null;
        if (createHotelDto.username) hotel = await this.userRepository.findOne({username: createHotelDto.username})
        if (hotel) throw new BadRequestException("username already exists");
        if (createHotelDto.email) hotel = await this.userRepository.findOne({email: createHotelDto.email});
        if (hotel) throw new BadRequestException("email already exists");
        const createdResult = await this.userRepository.create(createHotelDto);
        return createdResult;
    }

    async createCleaner(createCleanerDto: CreateHotelCleanerDto) {
        createCleanerDto.hotel = new Types.ObjectId(createCleanerDto.hotel)
        createCleanerDto.password = this.authService.hashPassword(createCleanerDto.password);
        createCleanerDto.role = ROLES.CLEANER;
        const cleaner = await this.userRepository.create(createCleanerDto);
        return cleaner;
    }

    async addCompanyToHotel(hotelID: string, addCompanyDto: AddCompanyToHotel) {
        await this.userRepository.updateOne({_id: hotelID}, {
            $set: {company: new Types.ObjectId(addCompanyDto.company)}
        });
        return true;
    }

    async createChecker(createCheckerDto: CreateHotelCheckerDto) {
        createCheckerDto.hotel = new Types.ObjectId(createCheckerDto.hotel)
        createCheckerDto.password = this.authService.hashPassword(createCheckerDto.password);
        createCheckerDto.role = ROLES.CHECKER;
        const checker = await this.userRepository.create(createCheckerDto);
        return checker;
    }

    async createReception(logo: string,createReceptionDto: CreateHotelReceptionDto) {
        const user = this.request.user;
        createReceptionDto.hotel = new Types.ObjectId(user._id)
        createReceptionDto.password = this.authService.hashPassword(createReceptionDto.password);
        createReceptionDto.role = ROLES.HOTELRECEPTION;
        const reception = await this.userRepository.create({logo,...createReceptionDto});
        return reception;
    }

    async findAll() {
        const hotels = await this.userRepository.find({role: ROLES.HOTELADMIN});
        return hotels;
    }

    async findOne(id: string) {
        const hotel = await this.userRepository.findOne({_id: id, role: ROLES.HOTELADMIN});
        if (!hotel) throw new NotFoundException("not found any hotel")
        return hotel;
    }

    async remove(id: string) {
        await this.userRepository.updateMany({hotel: id}, {
            $unset: {hotel: ""}
        });
        return true;
    }

    async receptions(hotel: string) {
        const receptions = await this.userRepository.find({hotel});
        return receptions
    }


    async updateHotelLogo(logo: string) {
        const user = this.request.user;

        const hotelLogo=await this.hotelLogoModel.findOneAndUpdate({hotel:user._id},{logo},
            {upsert: true});
        return hotelLogo;
    }


    async findHotelLogo(id: string) {
        const hotel = await this.hotelLogoModel.findOne({hotel: new Types.ObjectId(id)});
        if (!hotel) throw new NotFoundException("not found any hotel logo")
        return hotel;
    }
}
