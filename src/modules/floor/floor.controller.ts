import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { FloorService } from './floor.service';
import { CreateFloorDto } from './dto/create-floor.dto';
import { UpdateFloorDto } from './dto/update-floor.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from 'src/common/enums';
import { FloorFileUpload } from './interceptors/upload-image.interceptor';
import { IFloorFilesUpload } from './interfaces/files.interface';
import { AuthDecorator } from 'src/common/decorators/auth.decorator';
import { ROLES } from 'src/common/enums/role.enum';

@Controller('floor')
@ApiTags("Floor")
@AuthDecorator(ROLES.CHECKER)
export class FloorController {
  constructor(private readonly floorService: FloorService) { }

  @Post()
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  @UseInterceptors(FloorFileUpload)
  async saveFloorData(@UploadedFiles() files: IFloorFilesUpload, @Body() createFloorDto: CreateFloorDto) {
    const reusult = await this.floorService.create(createFloorDto, files);
    return { message: "save floor data successfully" }
  }

  @Get()
  getFloorStatus() {
    const floor = this.floorService.getFloorStatus();
    return { floor }
  }
}
