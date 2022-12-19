import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UseFilters, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator } from '@nestjs/common';
import { ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
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
import { Roles } from 'src/common/decorators/role.decorator';
import { CompanyIdDto, HotelIdDto } from '../cleaner/dto/cleaner.dto';
import { CheckerIdDto } from './dto/checker.dto';
import { GetUser } from 'src/common/decorators/user.decorator';

@Controller('checker')
@ApiTags("checker")
@AuthDecorator(ROLES.HOTELADMIN, ROLES.COMPANYADMIN)
export class CheckerController {
  constructor(private readonly checkerService: CheckerService) { }
  @Post()
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  @UseInterceptors(UploadImageInterceptor('avatar'))
  async create(@UploadedFileDecorator('image/*') avatar: MulterFile, @Body() createCheckerDto: CreateCheckerDto) {
    createCheckerDto.avatar = avatar.path.slice(7);
    const checker = await this.checkerService.create(createCheckerDto);
    return { checker }
  }

  @Get()
  async findAll() {
    const checkers = await this.checkerService.findAll();
    return { checkers }
  }
  @Get("/get-company-checkers/:companyID")
  @ApiParam({ name: "companyID", type: 'string' })
  @Roles(ROLES.SUPERADMIN)
  async getCheckerCompany(@Param() param: CompanyIdDto, @GetUser() user: Express.User) {
    const { companyID } = param;
    const checkers = await this.checkerService.getCompanyCheckers(companyID);
    return {
      checkers
    }
  }

  @Get("/get-company-checker-by-id/:checkerID")
  @ApiParam({ name: "cleanerID", type: 'string' })
  @Roles(ROLES.SUPERADMIN)
  async getCheckerCompanyById(@Param() param: CheckerIdDto, @GetUser() user: Express.User) {
    const { checkerID } = param;
    const checker = await this.checkerService.getCompanyCheckerById(checkerID);
    return {
      checker
    }
  }
  @Get("/get-hotel-checkers/:hotelID")
  @ApiParam({ name: "hotelID", type: 'string' })
  @Roles(ROLES.SUPERADMIN)
  async getCleanerHotel(@Param() param: HotelIdDto, @GetUser() user: Express.User) {
    const { hotelID } = param;
    const checkers = await this.checkerService.getHotelCheckers(hotelID);
    return {
      checkers
    }
  }

  @Get("/get-hotel-cleaner-by-id/:cleanerID")
  @ApiParam({ name: "cleanerID", type: 'string' })
  @Roles(ROLES.SUPERADMIN)
  async getCleanerHotelById(@Param() param: CheckerIdDto, @GetUser() user: Express.User) {
    const { checkerID } = param;
    const checker = await this.checkerService.getHotelCheckerById(checkerID);
    return {
      checker
    }
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
