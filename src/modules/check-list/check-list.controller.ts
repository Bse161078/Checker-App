import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AdminCheckListService } from './check-list.service';
import { CreateCheckListDto } from './dto/create-check-list.dto';
import { UpdateCheckListDto } from './dto/update-check-list.dto';

@Controller('check-list')
@ApiTags("Admin-chackList")
export class AdminCheckListController {
  constructor(private readonly checkListService: AdminCheckListService) {}

  @Post()
  @ApiConsumes("application/x-www-form-urlencoded", "application/json")
  create(@Body() createCheckListDto: CreateCheckListDto) {
    return createCheckListDto
    return this.checkListService.create(createCheckListDto);
  }

  @Get()
  findAll() {
    return this.checkListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCheckListDto: UpdateCheckListDto) {
    return this.checkListService.update(+id, updateCheckListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkListService.remove(+id);
  }
}
