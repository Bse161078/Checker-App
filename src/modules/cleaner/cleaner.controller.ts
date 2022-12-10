import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AuthDecorator } from 'src/common/decorators/auth.decorator';
import { SwaggerConsumes } from 'src/common/enums';
import { ROLES } from 'src/common/enums/role.enum';
import { CleanerService } from './cleaner.service';
import { CreateCleanerDto } from './dto/create-cleaner.dto';
import { UpdateCleanerDto } from './dto/update-cleaner.dto';

@Controller('cleaner')
@ApiTags("cleaner")
@AuthDecorator(ROLES.HOTELADMIN, ROLES.COMPANYADMIN)
export class CleanerController {
  constructor(private readonly cleanerService: CleanerService) { }

  @Post()
  @ApiConsumes(SwaggerConsumes.URL_ENCODED, SwaggerConsumes.JSON)
  async create(@Body() createCleanerDto: CreateCleanerDto) {
    const cleaner = await this.cleanerService.create(createCleanerDto);
    return { cleaner }
  }

  @Get()
  async findAll() {
    const cleaners = await this.cleanerService.findAll();
    return { cleaners }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const cleaner = this.cleanerService.findOne(id);
    return { cleaner }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCleanerDto: UpdateCleanerDto) {
    await this.cleanerService.update(id, updateCleanerDto);
    return { message: "updated cleaner successfully" }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.cleanerService.remove(id);
    return { message: "deleted cleaner successfully" }
  }
}
