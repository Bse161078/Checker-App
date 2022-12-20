import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReceptionService } from './reception.service';
import { CreateReceptionDto } from './dto/create-reception.dto';
import { UpdateReceptionDto } from './dto/update-reception.dto';

@Controller('reception')
export class ReceptionController {
  constructor(private readonly receptionService: ReceptionService) {}

  @Post()
  create(@Body() createReceptionDto: CreateReceptionDto) {
    return this.receptionService.create(createReceptionDto);
  }

  @Get()
  findAll() {
    return this.receptionService.getRooms();
  }


}
