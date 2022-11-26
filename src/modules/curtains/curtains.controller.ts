import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from 'src/common/enums';
import { CurtainsService } from './curtains.service';
import { CreateCurtainDto } from './dto/create-curtain.dto';
import { UpdateCurtainDto } from './dto/update-curtain.dto';

@Controller('curtains')
@ApiTags("Curtains")
export class CurtainsController {
  constructor(private readonly curtainsService: CurtainsService) {}

  @Post()
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  create(@Body() createCurtainDto: CreateCurtainDto) {
    return this.curtainsService.create(createCurtainDto);
  }

  @Get()
  findAll() {
    return this.curtainsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.curtainsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCurtainDto: UpdateCurtainDto) {
    return this.curtainsService.update(+id, updateCurtainDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.curtainsService.remove(+id);
  }
}
