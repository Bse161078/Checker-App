import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from 'src/common/enums';
import { BedService } from './bed.service';
import { CreateBedDto } from './dto/create-bed.dto';
import { UpdateBedDto } from './dto/update-bed.dto';

@Controller('bed')
@ApiTags("Bed")
export class BedController {
  constructor(private readonly bedService: BedService) {}

  @Post()
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  create(@Body() createBedDto: CreateBedDto) {
    return this.bedService.create(createBedDto);
  }

  @Get()
  findAll() {
    return this.bedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBedDto: UpdateBedDto) {
    return this.bedService.update(+id, updateBedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bedService.remove(+id);
  }
}
