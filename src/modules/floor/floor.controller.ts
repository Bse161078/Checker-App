import {Body, Controller, Get, Param, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {FloorService} from './floor.service';
import {CreateFloorDto} from './dto/create-floor.dto';
import {ApiConsumes, ApiOperation, ApiParam, ApiTags} from '@nestjs/swagger';
import {SwaggerConsumes} from 'src/common/enums';
import {FloorFileUpload} from './interceptors/upload-image.interceptor';
import {IFloorFilesUpload} from './interfaces/files.interface';
import {AuthDecorator} from 'src/common/decorators/auth.decorator';
import {ROLES} from 'src/common/enums/role.enum';
import {RoomIdDto} from '../room/dto/room.dto';
import {Types} from 'mongoose';

@Controller('floor')
@ApiTags("Floor")
@AuthDecorator(ROLES.CHECKER,ROLES.SUPERADMIN)
export class FloorController {
  constructor(private readonly floorService: FloorService) { }

  @Post("/:roomID")
  @ApiParam({ name: "roomID", type: "string", required: true })
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  @UseInterceptors(FloorFileUpload)
  @ApiOperation({summary: "checker role access"})
  async saveFloorData(
    @UploadedFiles() files: IFloorFilesUpload,
    @Body() createFloorDto: CreateFloorDto,
    @Param() param: RoomIdDto
  ) {
    createFloorDto.room = new Types.ObjectId(param.roomID)
    await this.floorService.create(createFloorDto, files);
    return { message: "save floor data successfully" }
  }

  @Get("/:roomID")
  @ApiParam({ name: "roomID", type: "string", required: true })
  @ApiOperation({summary: "checker role access"})
  async getFloorDetail(@Param() param: RoomIdDto) {
    const roomId = new Types.ObjectId(param.roomID)
    const floor = await this.floorService.getFloorStatus(roomId)
    return { floor }
  }
}
