import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { AdminRoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('room')
@ApiTags("Admin-room")
export class AdminRoomController {
  constructor(private readonly roomService: AdminRoomService) {}

  @Post()
  @ApiConsumes("application/x-www-form-urlencoded", "application/json")
  async create(@Body() createRoomDto: CreateRoomDto) {
    const createdResult = await this.roomService.create(createRoomDto);
    return {
      statusCode: HttpStatus.CREATED,
      data: {
        message: "created room successfully"
      }
    }
  }

  @Get()
  async findAll() {
    const rooms = await this.roomService.findAll();
    return {
      statusCode: HttpStatus.OK,
      data: {
        rooms
      }
    }
  }

  @Get(':id')
  @ApiParam({name: "id", type: "string"})
  async findOne(@Param('id') id: string) {
    const room = await this.roomService.findOne(id);
    return {
      statusCode: HttpStatus.OK,
      data: {
        room
      }
    }
  }
  
  @Patch(':id')
  @ApiParam({name: "id", type: "string"})
  async update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    const updatedResult = await this.roomService.update(id, updateRoomDto);
    return {
      statusCode: HttpStatus.OK,
      data: {
        message: "updated was successfully"
      }
    }
  }
  
  @Delete(':id')
  @ApiParam({name: "id", type: "string"})
  async remove(@Param('id') id: string) {
    const deletedResult = await this.roomService.remove(id);
    return {
      statusCode: HttpStatus.OK,
      data: {
        message: "deleted room successfully"
      }
    }
  }
}
