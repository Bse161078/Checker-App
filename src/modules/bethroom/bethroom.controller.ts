import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AuthDecorator } from 'src/common/decorators/auth.decorator';
import { SwaggerConsumes } from 'src/common/enums';
import { ROLES } from 'src/common/enums/role.enum';
import { BethroomService } from './bethroom.service';
import { CreateBethroomDto } from './dto/create-bethroom.dto';
import { UpdateBethroomDto } from './dto/update-bethroom.dto';
import { BethRoomFileUpload } from './interceptors/upload-file-bethroom.interceptor';
import { IBethRoomFilesUpload } from './interfaces/files.interface';

@Controller('bethroom')
@ApiTags("BethRoom")
@AuthDecorator(ROLES.CHECKER)
export class BethroomController {
  constructor(private readonly bethroomService: BethroomService) {}

  @Post()
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  @UseInterceptors(BethRoomFileUpload)
  async saveBethRoomData(@UploadedFiles() files: IBethRoomFilesUpload, @Body() createBethroomDto: CreateBethroomDto) {
    const result = await this.bethroomService.create(createBethroomDto, files);
    return { message: "save beth-room data successfully" }
  }
}
