import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Types } from 'mongoose';
import { SwaggerConsumes } from 'src/common/enums';
import { RoomIdDto } from '../room/dto/room.dto';
import { BedService } from './bed.service';
import { CreateBedDto } from './dto/create-bed.dto';
import { BedFileUpload } from './interceptors/upload-file-bed.interceptor';
import { IBedFilesUpload } from './interfaces/files.interface';

@Controller('bed')
@ApiTags("Bed")
export class BedController {
  constructor(private readonly bedService: BedService) { }

  @Post("/:roomID")
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  @ApiParam({ name: "roomID", type: "string", required: true })
  @UseInterceptors(BedFileUpload)
  create(
    @Body() createBedDto: CreateBedDto,
    @Param() param: RoomIdDto,
    @UploadedFiles() files: IBedFilesUpload
  ) {
    createBedDto.room = new Types.ObjectId(param.roomID);
    return this.bedService.create(createBedDto, files);
  }
}
