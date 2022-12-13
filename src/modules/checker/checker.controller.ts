import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UseFilters, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator } from '@nestjs/common';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AuthDecorator } from 'src/common/decorators/auth.decorator';
import { UploadedFileDecorator } from 'src/common/decorators/upload.decorators';
import { SwaggerConsumes } from 'src/common/enums';
import { ROLES } from 'src/common/enums/role.enum';
import AllExceptionFilter from 'src/common/filters/all-exception.filter';
import { UploadImageInterceptor } from 'src/common/interceptors/file-upload.interceptor';
import { MulterFile } from 'src/common/types/public';
import { CheckerService } from './checker.service';
import { CreateCheckerDto } from './dto/create-checker.dto';
import { UpdateCheckerDto } from './dto/update-checker.dto';

@Controller('checker')
@ApiTags("checker")
@AuthDecorator(ROLES.HOTELADMIN, ROLES.COMPANYADMIN)
export class CheckerController {
  constructor(private readonly checkerService: CheckerService) { }
  @Post()
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  @UseInterceptors(UploadImageInterceptor('avatar'))
  async create(@UploadedFileDecorator('image/*')avatar: MulterFile, @Body() createCheckerDto: CreateCheckerDto) {
    createCheckerDto.avatar = avatar.path.slice(7);
    const checker = await this.checkerService.create(createCheckerDto);
    return { checker }
  }

  @Get()
  async findAll() {
    const checkers = await this.checkerService.findAll();
    return { checkers }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const checker = this.checkerService.findOne(id);
    return { checker }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCheckerDto: UpdateCheckerDto) {
    await this.checkerService.update(id, updateCheckerDto);
    return { message: "updated checker successfully" }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.checkerService.remove(id);
    return { message: "deleted checker successfully" }
  }
}
