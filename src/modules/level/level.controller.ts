import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { LevelService } from './level.service';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { ApiConsumes, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from 'src/common/enums';
import { ROLES } from 'src/common/enums/role.enum';
import { Roles } from 'src/common/decorators/role.decorator';
import { GetUser } from 'src/common/decorators/user.decorator';
import { AuthDecorator } from 'src/common/decorators/auth.decorator';
import { LevelIdDto } from './dto/level.dto';

@Controller('level')
@ApiTags("admin - Level")
@AuthDecorator(ROLES.HOTELADMIN)
export class LevelController {
  constructor(private readonly levelService: LevelService) { }

  @Post()
  @ApiConsumes(SwaggerConsumes.URL_ENCODED, SwaggerConsumes.JSON)
  @ApiOperation({summary: "hotel role access"})
  async create(@Body() createLevelDto: CreateLevelDto, @GetUser() user: any) {
    const result = await this.levelService.create(createLevelDto, user._id);
    return result
  }
  
  @Get()
  @Roles()
  @ApiOperation({summary: "hotel role access"})
  async findAll() {
    const levels = await this.levelService.findAll();
    return { levels }
  }
  
  @Get(':levelID')
  @Roles()
  @ApiParam({ name: "levelID", type: "string" })
  @ApiOperation({summary: "hotel role access"})
  async findOne(@Param() levelIdDto: LevelIdDto) {
    const level = await this.levelService.findOne(levelIdDto.levelID);
    return { level }
  }
  
  @Patch(':levelID')
  @ApiParam({ name: "id", type: "string" })
  @ApiConsumes("application/x-www-form-urlencoded", "application/json")
  @ApiOperation({summary: "hotel role access"})
  async update(@Param() levelIdDto: LevelIdDto, @Body() updateLevelDto: UpdateLevelDto) {
    const result = await this.levelService.update(levelIdDto.levelID, updateLevelDto);
    return { message: "update level successfully" }
  }
  
  @Delete(':levelID')
  @ApiParam({ name: "id", type: "string" })
  @ApiOperation({summary: "hotel role access"})
  async remove(@Param() levelIdDto: LevelIdDto) {
    const result = await this.levelService.remove(levelIdDto.levelID);
    return {
      statusCode: HttpStatus.OK,
      data: {
        message: "deleted level successfully"
      }
    }
  }
}
