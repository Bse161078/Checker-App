import { Injectable } from '@nestjs/common';
import { CreateCurtainDto } from './dto/create-curtain.dto';
import { UpdateCurtainDto } from './dto/update-curtain.dto';

@Injectable()
export class CurtainsService {
  create(createCurtainDto: CreateCurtainDto) {
    return 'This action adds a new curtain';
  }

  findAll() {
    return `This action returns all curtains`;
  }

  findOne(id: number) {
    return `This action returns a #${id} curtain`;
  }

  update(id: number, updateCurtainDto: UpdateCurtainDto) {
    return `This action updates a #${id} curtain`;
  }

  remove(id: number) {
    return `This action removes a #${id} curtain`;
  }
}
