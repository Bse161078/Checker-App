import {Body, Controller, Get, Param, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {ShelvesService} from './shelves.service';
import {CreateShelvesDto} from './dto/create-shelf.dto';
import {ApiConsumes, ApiOperation, ApiParam, ApiTags} from '@nestjs/swagger';
import {SwaggerConsumes} from 'src/common/enums';
import {IShelvesFilesUpload} from './interfaces/files.interface';
import {ShelvesFileUpload} from './interceptors/upload-file-shelves.interceptor';
import {RoomIdDto} from '../room/dto/room.dto';
import {Types} from 'mongoose';
import {AuthDecorator} from 'src/common/decorators/auth.decorator';
import {ROLES} from 'src/common/enums/role.enum';

@Controller('shelves')
@ApiTags("Shelves")
@AuthDecorator(ROLES.CHECKER,ROLES.SUPERADMIN)
export class ShelvesController {
  constructor(private readonly shelvesService: ShelvesService) { }

  @Post("/:roomID")
  @ApiParam({ name: "roomID", type: "string", required: true })
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  @ApiOperation({ summary: "checker role access" })
  @UseInterceptors(ShelvesFileUpload)
  async create(
    @UploadedFiles() files: IShelvesFilesUpload,
    @Body() createShelvesDto: CreateShelvesDto,
    @Param() param: RoomIdDto
  ) {
    createShelvesDto.room = new Types.ObjectId(param.roomID)
    const result = await this.shelvesService.create(createShelvesDto, files);
    return { message: "save shelves data successfully" }
  }

  @Get("/:roomID")
  @ApiOperation({ summary: "checker role access" })
  @ApiParam({ name: "roomID", type: "string", required: true })
  async getBathRoomDetail(@Param() param: RoomIdDto) {
    const roomId = new Types.ObjectId(param.roomID)
    const shelves = await this.shelvesService.getShelvesStatus(roomId)
    return { shelves }
  }
}
