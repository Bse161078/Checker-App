import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AuthDecorator } from 'src/common/decorators/auth.decorator';
import { SwaggerConsumes } from 'src/common/enums';
import { ROLES } from 'src/common/enums/role.enum';
import { CurtainsService } from './curtains.service';
import { CreateCurtainDto } from './dto/create-curtain.dto';
import { UpdateCurtainDto } from './dto/update-curtain.dto';
import { CurtainFileUpload } from './interceptors/upload-file-bethroom.interceptor';
import { ICurtainFilesUpload } from './interfaces/files.interface';

@Controller('curtains')
@ApiTags("Curtains")
@AuthDecorator(ROLES.CHECKER)
export class CurtainsController {
  constructor(private readonly curtainsService: CurtainsService) {}

  @Post()
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  @UseInterceptors(CurtainFileUpload)
  async create(@UploadedFiles() files: ICurtainFilesUpload,@Body() createCurtainDto: CreateCurtainDto) {
    const result = await this.curtainsService.create(createCurtainDto, files);
  }

}
