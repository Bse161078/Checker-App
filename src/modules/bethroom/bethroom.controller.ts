import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from 'src/common/enums';
import { BethroomService } from './bethroom.service';
import { CreateBethroomDto } from './dto/create-bethroom.dto';
import { UpdateBethroomDto } from './dto/update-bethroom.dto';

@Controller('bethroom')
@ApiTags("BethRoom")
export class BethroomController {
  constructor(private readonly bethroomService: BethroomService) {}

  @Post()
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  create(@Body() createBethroomDto: CreateBethroomDto) {
    return this.bethroomService.create(createBethroomDto);
  }

  @Get()
  findAll() {
    return this.bethroomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bethroomService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBethroomDto: UpdateBethroomDto) {
    return this.bethroomService.update(+id, updateBethroomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bethroomService.remove(+id);
  }
}
