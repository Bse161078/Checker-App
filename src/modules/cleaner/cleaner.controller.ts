import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ApiConsumes, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthDecorator } from 'src/common/decorators/auth.decorator';
import { Roles } from 'src/common/decorators/role.decorator';
import { UploadedFileDecorator } from 'src/common/decorators/upload.decorators';
import { GetUser } from 'src/common/decorators/user.decorator';
import { SwaggerConsumes } from 'src/common/enums';
import { ROLES } from 'src/common/enums/role.enum';
import { UploadImageInterceptor } from 'src/common/interceptors/file-upload.interceptor';
import { MulterFile } from 'src/common/types/public';
import { RoomIdDto } from '../company/room/dto/room.dto';
import { CleanerService } from './cleaner.service';
import { CreateCleanerDto } from './dto/create-cleaner.dto';
import { UpdateCleanerDto } from './dto/update-cleaner.dto';
import { CleanerIdDto, CompanyIdDto, HotelIdDto } from './dto/cleaner.dto';

@Controller('cleaner')
@ApiTags("cleaner")
@AuthDecorator(ROLES.HOTELADMIN, ROLES.COMPANYADMIN)
export class CleanerController {
  constructor(private readonly cleanerService: CleanerService) { }
  @Post()
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  @ApiOperation({summary: "hotel and company role access"})
  @UseInterceptors(UploadImageInterceptor('avatar'))
  async create(@UploadedFile() avatar: MulterFile, @Body() createCleanerDto: CreateCleanerDto) {
    if(avatar) createCleanerDto.avatar = avatar.path.slice(7);
    const cleaner = await this.cleanerService.create(createCleanerDto);
    return { cleaner }
  }
  
  @Get()
  @Roles(ROLES.CHECKER, ROLES.COMPANYADMIN, ROLES.HOTELADMIN)
  @ApiOperation({summary: "hotel and company and checker role access"})
  async findAll() {
    const cleaners = await this.cleanerService.findAll();
    return { cleaners }
  }
  @Get("/start-cleaning/:roomID")
  @ApiOperation({summary: "supper-admin access"})
  @ApiParam({name: "roomID", type: 'string'})
  @Roles(ROLES.CLEANER)
  async startCleaning(@Param() param: RoomIdDto, @GetUser() user: Express.User){
    const {roomID} = param;
    const cleaningRoomStatus = await this.cleanerService.startCleaningRoom(roomID);
    return {message: `cleaner starts cleaning at ${cleaningRoomStatus.cleaningStartAt}`}
  }
  @Get("/finish-cleaning/:roomID")
  @ApiOperation({summary: "supper-admin access"})
  @ApiParam({name: "roomID", type: 'string'})
  @Roles(ROLES.CLEANER)
  async finishCleaning(@Param() param: RoomIdDto, @GetUser() user: Express.User){
    const {roomID} = param;
    const cleaningRoomStatus = await this.cleanerService.endCleaningRoom(roomID);
    return {message: `cleaner finished cleaning at ${cleaningRoomStatus.cleaningEndAt}`}
  }
  @Get("/get-company-cleaners/:companyID")
  @ApiOperation({summary: "supper-admin access"})
  @ApiParam({name: "companyID", type: 'string'})
  @Roles(ROLES.SUPERADMIN)
  async getCleanerCompany(@Param() param: CompanyIdDto, @GetUser() user: Express.User){
    const {companyID} = param;
    const cleaners = await this.cleanerService.getCompanyCleaners(companyID);
    return {
      cleaners
    }
  }

  @Get("/get-company-cleaner-by-id/:cleanerID")
  @ApiOperation({summary: "supper-admin access"})
  @ApiParam({name: "cleanerID", type: 'string'})
  @Roles(ROLES.SUPERADMIN)
  async getCleanerCompanyById(@Param() param: CleanerIdDto, @GetUser() user: Express.User){
    const {cleanerID} = param;
    const cleaner = await this.cleanerService.getCompanyCleanerById(cleanerID);
    return {
      cleaner
    }
  }
  @Get("/get-hotel-cleaners/:hotelID")
  @ApiParam({name: "hotelID", type: 'string'})
  @Roles(ROLES.SUPERADMIN)
  @ApiOperation({summary: "supper-admin role access"})
  async getCleanerHotel(@Param() param: HotelIdDto, @GetUser() user: Express.User){
    const {hotelID} = param;
    const cleaners = await this.cleanerService.getHotelCleaners(hotelID);
    return {
      cleaners
    }
  }

  @Get("/get-hotel-cleaner-by-id/:cleanerID")
  @ApiParam({name: "cleanerID", type: 'string'})
  @Roles(ROLES.SUPERADMIN)
  @ApiOperation({summary: "supper-admin role access"})
  async getCleanerHotelById(@Param() param: CleanerIdDto, @GetUser() user: Express.User){
    const {cleanerID} = param;
    const cleaner = await this.cleanerService.getHotelCleanerById(cleanerID);
    return {
      cleaner
    }
  }
  
  @Get(':cleanerID')
  @Roles(ROLES.CHECKER, ROLES.COMPANYADMIN, ROLES.HOTELADMIN)
  @ApiOperation({summary: "hotel and company and checker role access"})
  @ApiParam({name: "cleanerID", type: 'string'})
  findOne(@Param() cleanerIdDto: CleanerIdDto) {
    const cleaner = this.cleanerService.findOne(cleanerIdDto.cleanerID);
    return { cleaner }
  }
  
  @Patch(':cleanerID')
  @ApiParam({name: "cleanerID", type: 'string'})
  @ApiOperation({summary: "hotel and company role access"})
  async update(@Param() cleanerIdDto: CleanerIdDto, @Body() updateCleanerDto: UpdateCleanerDto) {
    await this.cleanerService.update(cleanerIdDto.cleanerID, updateCleanerDto);
    return { message: "updated cleaner successfully" }
  }
  
  @Delete(':cleanerID')
  @ApiParam({name: "cleanerID", type: 'string'})
  @ApiOperation({summary: "hotel and company role access"})
  async remove(@Param() cleanerIdDto: CleanerIdDto) {
    await this.cleanerService.remove(cleanerIdDto.cleanerID);
    return { message: "deleted cleaner successfully" }
  }

}
