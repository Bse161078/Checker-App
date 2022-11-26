import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { LevelService } from './level.service';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('level')
@ApiTags("admin - Level")
export class LevelController {
  constructor(private readonly levelService: LevelService) {}

  @Post()
  @ApiConsumes("application/x-www-form-urlencoded", "application/json")
  async create(@Body() createLevelDto: CreateLevelDto) {
    const result = await this.levelService.create(createLevelDto);
    return {
      statusCode: HttpStatus.CREATED,
      data: {
        message: "created successfully"
      }
    }
  }

  @Get()
  async findAll() {
    const levels = await this.levelService.findAll();
    return {
      statusCode: HttpStatus.OK,
      data: {
        levels
      }
    }
  }

  @Get(':id')
  @ApiParam({name: "id", type: "string"})
  async findOne(@Param('id') id: string) {
    const level = await this.levelService.findOne(id);
    return {
      statusCode: HttpStatus.OK,
      data: {
        level
      }
    }
  }

  @Patch(':id')
  @ApiParam({name: "id", type: "string"})
  @ApiConsumes("application/x-www-form-urlencoded", "application/json")
  async update(@Param('id') id: string, @Body() updateLevelDto: UpdateLevelDto) {
    const result = await this.levelService.update(id, updateLevelDto);
    return {
      statusCode: HttpStatus.OK,
      data: {
        message: "update level successfully"
      }
    }
  }

  @Delete(':id')
  @ApiParam({name: "id", type: "string"})
  async remove(@Param('id') id: string) {
    const result = await this.levelService.remove(id);
    return {
      statusCode: HttpStatus.OK,
      data: {
        message: "deleted level successfully"
      }
    }
  }
}
