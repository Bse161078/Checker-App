import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { LevelService } from './level.service';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from 'src/common/enums';
import { ROLES } from 'src/common/enums/role.enum';
import { Roles } from 'src/common/decorators/role.decorator';
import { GetUser } from 'src/common/decorators/user.decorator';
import { AuthDecorator } from 'src/common/decorators/auth.decorator';

@Controller('level')
@ApiTags("admin - Level")
@AuthDecorator(ROLES.HOTELADMIN)
export class LevelController {
  constructor(private readonly levelService: LevelService) { }

  @Post()
  @ApiConsumes(SwaggerConsumes.URL_ENCODED, SwaggerConsumes.JSON)
  async create(@Body() createLevelDto: CreateLevelDto, @GetUser() user: Express.User) {
    const result = await this.levelService.create(createLevelDto, user._id);
    return result
  }

  @Get()
  @Roles()
  async findAll() {
    const levels = await this.levelService.findAll();
    return { levels }
  }

  @Get(':id')
  @Roles()
  @ApiParam({ name: "id", type: "string" })
  async findOne(@Param('id') id: string) {
    const level = await this.levelService.findOne(id);
    return { level }
  }

  @Patch(':id')
  @ApiParam({ name: "id", type: "string" })
  @ApiConsumes("application/x-www-form-urlencoded", "application/json")
  async update(@Param('id') id: string, @Body() updateLevelDto: UpdateLevelDto) {
    const result = await this.levelService.update(id, updateLevelDto);
    return { message: "update level successfully" }
  }

  @Delete(':id')
  @ApiParam({ name: "id", type: "string" })
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
