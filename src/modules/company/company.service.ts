import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../user/entities/user.entity';
import { FilterQuery, Model, Types } from 'mongoose';
import { ROLES } from 'src/common/enums/role.enum';
import { AuthService } from '../auth/services/auth.service';
import { CreateCompanyCheckerDto, CreateCompanyCleanerDto } from './dto/company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(User.name) private userRepository: Model<UserDocument>,
    private authService: AuthService
  ) { }
  async create(createCompanyDto: CreateCompanyDto) {
    createCompanyDto.password = this.authService.hashPassword(createCompanyDto.password);
    createCompanyDto.role = ROLES.COMPANYADMIN;
    let company = null;
    if (createCompanyDto.username) company = await this.userRepository.findOne({ username: createCompanyDto.username })
    if (company) throw new BadRequestException("username already exists");
    if (createCompanyDto.email) company = await this.userRepository.findOne({ email: createCompanyDto.email });
    if (company) throw new BadRequestException("email already exists");
    const createdResult = await this.userRepository.create(createCompanyDto);
    return createdResult;
  }
  async createCleaner(createCleanerDto: CreateCompanyCleanerDto){
    createCleanerDto.hotel = new Types.ObjectId(createCleanerDto.hotel)
    createCleanerDto.password = this.authService.hashPassword(createCleanerDto.password);
    createCleanerDto.role = ROLES.CLEANER;
    const cleaner = await this.userRepository.create(createCleanerDto);
    return cleaner;
  }
  async createChecker(createCheckerDto: CreateCompanyCheckerDto){
    createCheckerDto.hotel = new Types.ObjectId(createCheckerDto.hotel)
    createCheckerDto.company = new Types.ObjectId(createCheckerDto.company)
    createCheckerDto.password = this.authService.hashPassword(createCheckerDto.password);
    createCheckerDto.role = ROLES.CHECKER;
    const cleaner = await this.userRepository.create(createCheckerDto);
    return cleaner;
  }
  async findAll() {
    const companies = await this.userRepository.find({ role: ROLES.COMPANYADMIN });
    return companies;
  }

  async findOne(id: string) {
    const company = await this.userRepository.findOne({ _id: id, role: ROLES.COMPANYADMIN });
    if (!company) throw new NotFoundException("not found any company")
    return company;
  }


  async remove(id: string) {
    const company = await this.findOne(id)
    const removedResult = await this.userRepository.deleteOne({ _id: id });
    await this.userRepository.updateMany({ company: id }, {
      $unset: { company: "" }
    });
    return true;
  }
}
