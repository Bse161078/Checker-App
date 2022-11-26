import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShelvesService } from './shelves.service';
import { CreateShelfDto } from './dto/create-shelf.dto';
import { UpdateShelfDto } from './dto/update-shelf.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from 'src/common/enums';

@Controller('shelves')
@ApiTags("Shelves")
export class ShelvesController {
  constructor(private readonly shelvesService: ShelvesService) {}

  @Post()
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  create(@Body() createShelfDto: CreateShelfDto) {
    return this.shelvesService.create(createShelfDto);
  }

  @Get()
  findAll() {
    return this.shelvesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shelvesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShelfDto: UpdateShelfDto) {
    return this.shelvesService.update(+id, updateShelfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shelvesService.remove(+id);
  }
}
