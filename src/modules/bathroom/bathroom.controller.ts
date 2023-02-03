import {Body, Controller, Get, Param, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {ApiConsumes, ApiOperation, ApiParam, ApiTags} from '@nestjs/swagger';
import {Types} from 'mongoose';
import {AuthDecorator} from 'src/common/decorators/auth.decorator';
import {SwaggerConsumes} from 'src/common/enums';
import {ROLES} from 'src/common/enums/role.enum';
import {RoomIdDto} from '../room/dto/room.dto';
import {BathroomService} from './bathroom.service';
import {CreateBathroomDto} from './dto/create-bathroom.dto';
import {BathRoomFileUpload} from './interceptors/upload-file-bathroom.interceptor';
import {IBathRoomFilesUpload} from './interfaces/files.interface';

@Controller('bathroom')
@ApiTags("BathRoom")
@AuthDecorator(ROLES.CHECKER,ROLES.SUPERADMIN)
export class BathroomController {
  constructor(private readonly bathroomService: BathroomService) { }

  @Post("/:roomID")
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  @UseInterceptors(BathRoomFileUpload)
  @ApiParam({ name: "roomID", type: "string", required: true })
  @ApiOperation({summary: "checker role access"})
  async saveBathRoomData(
    @UploadedFiles() files: IBathRoomFilesUpload,
    @Body() createBathroomDto: CreateBathroomDto,
    @Param() param: RoomIdDto
  ) {
    createBathroomDto.room = new Types.ObjectId(param.roomID)
    const result = await this.bathroomService.create(createBathroomDto, files);
    return { message: "save bath-room data successfully" }
  }
  @Get("/:roomID")
  @ApiParam({ name: "roomID", type: "string", required: true })
  @ApiOperation({summary: "checker role access"})
  async getBathRoomDetail(@Param() param: RoomIdDto) {
    const roomId = new Types.ObjectId(param.roomID)
    const bathroom = await this.bathroomService.getBathRoomStatus(roomId)
    return { bathroom }
  }
}
