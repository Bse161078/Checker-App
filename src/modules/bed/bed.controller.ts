import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ApiConsumes, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Types } from 'mongoose';
import { AuthDecorator } from 'src/common/decorators/auth.decorator';
import { SwaggerConsumes } from 'src/common/enums';
import { ROLES } from 'src/common/enums/role.enum';
import { RoomIdDto } from '../room/dto/room.dto';
import { BedService } from './bed.service';
import { CreateBedDto } from './dto/create-bed.dto';
import { BedFileUpload } from './interceptors/upload-file-bed.interceptor';
import { IBedFilesUpload } from './interfaces/files.interface';

@Controller('bed')
@ApiTags("Bed")
@AuthDecorator(ROLES.CHECKER)
export class BedController {
  constructor(private readonly bedService: BedService) { }

  @Post("/:roomID")
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  @ApiParam({ name: "roomID", type: "string", required: true })
  @UseInterceptors(BedFileUpload)
  @ApiOperation({summary: "checker role access"})
  async create(
    @Body() createBedDto: CreateBedDto,
    @Param() param: RoomIdDto,
    @UploadedFiles() files: IBedFilesUpload
  ) {
    createBedDto.room = new Types.ObjectId(param.roomID);
    const bed = await this.bedService.create(createBedDto, files);
    return {
      message: "created bed report successfully"
    }
  }
  @Get("/:roomID")
  @ApiParam({ name: "roomID", type: "string", required: true })
  @ApiOperation({summary: "checker role access"})
  async getBedDetail(@Param() param: RoomIdDto) {
    const roomId = new Types.ObjectId(param.roomID)
    const bed = await this.bedService.getBedStatus(roomId)
    return { bed }
  }
}
