import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ShelvesService } from './shelves.service';
import { CreateShelvesDto } from './dto/create-shelf.dto';
import { UpdateShelfDto } from './dto/update-shelf.dto';
import { ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from 'src/common/enums';
import { IShelvesFilesUpload } from './interfaces/files.interface';
import { ShelvesFileUpload } from './interceptors/upload-file-shelves.interceptor';
import { RoomIdDto } from '../room/dto/room.dto';
import { Types } from 'mongoose';

@Controller('shelves')
@ApiTags("Shelves")
export class ShelvesController {
  constructor(private readonly shelvesService: ShelvesService) { }

  @Post("/:roomID")
  @ApiParam({ name: "roomID", type: "string", required: true })
  @ApiConsumes(SwaggerConsumes.MULTIPART)
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

}
