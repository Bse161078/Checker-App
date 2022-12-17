import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomTypeService } from './room-type.service';
import { CreateRoomTypeDto } from './dto/create-room-type.dto';
import { UpdateRoomTypeDto } from './dto/update-room-type.dto';
import { ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from 'src/common/enums';
import { AuthDecorator } from 'src/common/decorators/auth.decorator';
import { ROLES } from 'src/common/enums/role.enum';

@Controller('room-type')
@AuthDecorator(ROLES.HOTELADMIN)
@ApiTags("AdminRoomType")
export class RoomTypeController {
  constructor(private readonly roomTypeService: RoomTypeService) {}

  @Post()
  @ApiConsumes(SwaggerConsumes.URL_ENCODED, SwaggerConsumes.JSON)
  async create(@Body() createRoomTypeDto: CreateRoomTypeDto) {
    const roomType = await this.roomTypeService.create(createRoomTypeDto);
    return {
      message: "created room type successfully"
    }
  }

  @Get()
  async findAll() {
    const roomTypes = await this.roomTypeService.findAll();
    return {
      roomTypes
    }
  }

  @Get(':id')
  @ApiParam({name: "id", type: "string"})
  async findOne(@Param('id') id: string) {
    const roomType = await this.roomTypeService.findOne(id);
    return {
      roomType
    }
  }

  @Patch(':id')
  @ApiParam({name: "id", type: "string"})
  @ApiConsumes(SwaggerConsumes.URL_ENCODED, SwaggerConsumes.JSON)
  async update(@Param('id') id: string, @Body() updateRoomTypeDto: UpdateRoomTypeDto) {
    const updatedResult = await this.roomTypeService.update(id, updateRoomTypeDto);
    return {
      message: "update room type successfully"
    }
  }

  @Delete(':id')
  @ApiParam({name: "id", type: "string"})
  async remove(@Param('id') id: string) {
    const deletedResult = await this.roomTypeService.remove(id);
    return {
      message: "deleted room type successfully"
    }
  }
}
