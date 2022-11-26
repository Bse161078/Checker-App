import { Injectable } from '@nestjs/common';
import { CreateCheckListDto } from './dto/create-check-list.dto';
import { UpdateCheckListDto } from './dto/update-check-list.dto';

@Injectable()
export class AdminCheckListService {
  create(createCheckListDto: CreateCheckListDto) {
    return 'This action adds a new checkList';
  }

  findAll() {
    return `This action returns all checkList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} checkList`;
  }

  update(id: number, updateCheckListDto: UpdateCheckListDto) {
    return `This action updates a #${id} checkList`;
  }

  remove(id: number) {
    return `This action removes a #${id} checkList`;
  }
}
