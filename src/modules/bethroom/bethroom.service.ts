import { Injectable } from '@nestjs/common';
import { CreateBethroomDto } from './dto/create-bethroom.dto';
import { UpdateBethroomDto } from './dto/update-bethroom.dto';

@Injectable()
export class BethroomService {
  create(createBethroomDto: CreateBethroomDto) {
    return 'This action adds a new bethroom';
  }

  findAll() {
    return `This action returns all bethroom`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bethroom`;
  }

  update(id: number, updateBethroomDto: UpdateBethroomDto) {
    return `This action updates a #${id} bethroom`;
  }

  remove(id: number) {
    return `This action removes a #${id} bethroom`;
  }
}
