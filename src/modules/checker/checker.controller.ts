import {Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ApiConsumes, ApiOperation, ApiParam, ApiTags} from '@nestjs/swagger';
import {AuthDecorator} from 'src/common/decorators/auth.decorator';
import {SwaggerConsumes} from 'src/common/enums';
import {ROLES} from 'src/common/enums/role.enum';
import {UploadImageInterceptor} from 'src/common/interceptors/file-upload.interceptor';
import {MulterFile} from 'src/common/types/public';
import {CheckerService} from './checker.service';
import {CreateCheckerDto} from './dto/create-checker.dto';
import {UpdateCheckerDto} from './dto/update-checker.dto';
import {Roles} from 'src/common/decorators/role.decorator';
import {CompanyIdDto, HotelIdDto} from '../cleaner/dto/cleaner.dto';
import {CheckerIdDto} from './dto/checker.dto';
import {GetUser} from 'src/common/decorators/user.decorator';

@Controller('checker')
@ApiTags("checker")
@AuthDecorator(ROLES.HOTELADMIN, ROLES.COMPANYADMIN,ROLES.CHECKER)
export class CheckerController {
  constructor(private readonly checkerService: CheckerService) { }
  @Post()
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  @UseInterceptors(UploadImageInterceptor('avatar'))
  @ApiOperation({summary: "hotel and company role access"})
  async create(@UploadedFile() avatar: MulterFile, @Body() createCheckerDto: CreateCheckerDto) {
    if(avatar) createCheckerDto.avatar = avatar.path.slice(7);
    const checker = await this.checkerService.create(createCheckerDto);
    return { checker }
  }

  @Get()
  async findAll() {
    const checkers = await this.checkerService.findAll();
    return { checkers }
  }
  @Get("/get-company-checkers/:companyID")
  @ApiOperation({summary: "supper-admin role access"})
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
  @ApiOperation({summary: "supper-admin role access"})
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
  @ApiOperation({summary: "supper-admin role access"})
  @ApiParam({ name: "hotelID", type: 'string' })
  @Roles(ROLES.SUPERADMIN)
  async getCleanerHotel(@Param() param: HotelIdDto, @GetUser() user: Express.User) {
    const { hotelID } = param;
    const checkers = await this.checkerService.getHotelCheckers(hotelID);
    return {
      checkers
    }
  }

  @Get("/get-hotel-checker-by-id/:cleanerID")
  @ApiOperation({summary: "supper-admin role access"})
  @ApiParam({ name: "cleanerID", type: 'string' })
  @Roles(ROLES.SUPERADMIN)
  async getCleanerHotelById(@Param() param: CheckerIdDto, @GetUser() user: Express.User) {
    const { checkerID } = param;
    const checker = await this.checkerService.getHotelCheckerById(checkerID);
    return {
      checker
    }
  }
  @Get(':checkerID')
  @ApiParam({name: "checkerID"})
  @ApiOperation({summary: "hotel and company role access"})
  async findOne(@Param() checkerIdDto: CheckerIdDto) {
    const checker = await this.checkerService.findOne(checkerIdDto.checkerID);
    return { checker }
  }

  @Patch(':checkerID')
  @ApiParam({name: "checkerID"})
  @ApiOperation({summary: "hotel and company role access"})
  async update(@Param() checkerIdDto: CheckerIdDto, @Body() updateCheckerDto: UpdateCheckerDto) {
    await this.checkerService.update(checkerIdDto.checkerID, updateCheckerDto);
    return { message: "updated checker successfully" }
  }
  
  @Delete(':checkerID')
  @ApiParam({name: "checkerID"})
  @ApiOperation({summary: "hotel and company role access"})
  async remove(@Param() checkerIdDto: CheckerIdDto) {
    await this.checkerService.remove(checkerIdDto.checkerID);
    return { message: "deleted checker successfully" }
  }

}
