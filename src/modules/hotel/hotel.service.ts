import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../user/entities/user.entity';
import { Model, Types } from 'mongoose';
import { ROLES } from 'src/common/enums/role.enum';
import { AuthService } from '../auth/services/auth.service';
import { CreateHotelCheckerDto, CreateHotelCleanerDto } from './dto/hotel.dto';

@Injectable()
export class HotelService {
  constructor(
    @InjectModel(User.name) private userRepository: Model<UserDocument>,
    private authService: AuthService
  ) { }
  async create(createHotelDto: CreateHotelDto) {
    createHotelDto.password = this.authService.hashPassword(createHotelDto.password);
    createHotelDto.role = ROLES.COMPANYADMIN;
    let hotel = null;
    if (createHotelDto.username) hotel = await this.userRepository.findOne({ username: createHotelDto.username })
    if (hotel) throw new BadRequestException("username already exists");
    if (createHotelDto.email) hotel = await this.userRepository.findOne({ email: createHotelDto.email });
    if (hotel) throw new BadRequestException("email already exists");
    const createdResult = await this.userRepository.create(createHotelDto);
    return createdResult;
  }
  async createCleaner(createCleanerDto: CreateHotelCleanerDto){
    createCleanerDto.hotel = new Types.ObjectId(createCleanerDto.hotel)
    createCleanerDto.password = this.authService.hashPassword(createCleanerDto.password);
    createCleanerDto.role = ROLES.CLEANER;
    const cleaner = await this.userRepository.create(createCleanerDto);
    return cleaner;
  }
  async createChecker(createCleanerDto: CreateHotelCheckerDto){
    createCleanerDto.hotel = new Types.ObjectId(createCleanerDto.hotel)
    createCleanerDto.password = this.authService.hashPassword(createCleanerDto.password);
    createCleanerDto.role = ROLES.CHECKER;
    const cleaner = await this.userRepository.create(createCleanerDto);
    return cleaner;
  }
  async findAll() {
    const hotels = await this.userRepository.find({ role: ROLES.HOTELADMIN });
    return hotels;
  }

  async findOne(id: string) {
    const hotel = await this.userRepository.findOne({ _id: id, role: ROLES.HOTELADMIN });
    if (!hotel) throw new NotFoundException("not found any hotel")
    return hotel;
  }

  async remove(id: string) {
    await this.userRepository.updateMany({ hotel: id }, {
      $unset: { hotel: "" }
    });
    return true;
  }
}
