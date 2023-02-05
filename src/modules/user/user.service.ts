import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { NotFoundError } from 'rxjs';
import { ADMIN_ROLES, ROLES } from 'src/common/enums/role.enum';
import { removeEmptyFieldsObject } from 'src/common/utils/functions';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { AuthService } from '../auth/services/auth.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userRepository: Model<UserDocument>,
    private authService: AuthService
  ) { }
  async create(createUserDto: CreateUserDto) {
    const newObjectDto: CreateUserDto = removeEmptyFieldsObject(createUserDto)
    await this.checkExistUser(newObjectDto);
    createUserDto.password = this.authService.hashPassword(createUserDto.password)
    const user = await this.userRepository.create(createUserDto);
    if (createUserDto.role == ADMIN_ROLES.HOTELADMIN) {
      await this.update(user._id.toString(), { hotel: user._id })
    }
    return user
  }

  async findAll() {
    return await this.userRepository.find({})
  }

  async findOne(id: string) {
    const user = await this.userRepository.findById(new Types.ObjectId(id));
    if (!user) throw new NotFoundException("user not found ");
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    const updatedResult = await this.userRepository.updateOne({ _id: user._id }, {
      $set: updateUserDto
    })
    if (!!updatedResult.modifiedCount) return true;
    throw new BadRequestException("updated user failed")
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    const deletedResult = await this.userRepository.deleteOne({ _id: user._id });
    if (!!deletedResult.deletedCount) return true;
    throw new BadRequestException("deleted user failed")
  }
  async checkExistUser(createUserDto: CreateUserDto) {
    let checkUser = await this.userRepository.findOne({ username: createUserDto.username });
    if (checkUser) throw new BadRequestException("username already exist")
    if (createUserDto.mobile) checkUser = await this.userRepository.findOne({ mobile: createUserDto.mobile });
    if (checkUser) throw new BadRequestException("mobile already exist")
    if (createUserDto.email) checkUser = await this.userRepository.findOne({ email: createUserDto.email });
    if (checkUser) throw new BadRequestException("email already exist")
  }



}
