import { Controller, Get, Post, Body, Param, Delete, UploadedFile } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { AddCompanyToHotel, CreateHotelDto } from './dto/create-hotel.dto';
import { ApiConsumes, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from 'src/common/enums';
import { AuthDecorator } from 'src/common/decorators/auth.decorator';
import { ROLES } from 'src/common/enums/role.enum';
import { CreateHotelCheckerDto, CreateHotelCleanerDto, CreateHotelReceptionDto, HotelDto } from './dto/hotel.dto';
import { MulterFile } from 'src/common/types/public';
import { Roles } from 'src/common/decorators/role.decorator';

@Controller('hotel')
@ApiTags("hotel-supperAdmin")
@AuthDecorator(ROLES.SUPERADMIN)
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Post()
  @ApiConsumes(SwaggerConsumes.URL_ENCODED, SwaggerConsumes.JSON)
  @ApiOperation({summary: "supper-admin role access"})
  async create(@Body() createHotelDto: CreateHotelDto) {
    const hotel = await this.hotelService.create(createHotelDto);
    return {
      message: "created hotel account successfully"
    }
  }
  @Post("/add-company-to-hotel/:hotelID")
  @ApiConsumes(SwaggerConsumes.URL_ENCODED, SwaggerConsumes.JSON)
  @ApiOperation({summary: "supper-admin and hotel-admin role access"})
  @Roles(ROLES.SUPERADMIN, ROLES.HOTELADMIN)
  @ApiParam({name: "hotelID"})
  async addCompanyToHotel(@Param('hotelID') hotelID: string, @Body() addCompanyDto: AddCompanyToHotel) {
    await this.hotelService.addCompanyToHotel(hotelID, addCompanyDto);
    return {
      message: "added company account to hotel successfully"
    }
  }
  @Post("/create-hotel-cleaner")
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  @ApiOperation({summary: "supper-admin role access"})
  async createHotelCleaner(@UploadedFile()avatar: MulterFile, @Body() createCleanerDto: CreateHotelCleanerDto) {
    if(avatar) createCleanerDto.avatar = avatar.path.slice(7);
    const cleaner = await this.hotelService.createCleaner(createCleanerDto);
    return {
      message: "created hotel cleaner account successfully"
    }
  }
  @Post("/create-hotel-reception")
  @ApiConsumes(SwaggerConsumes.URL_ENCODED, SwaggerConsumes.JSON)
  @ApiOperation({summary: "supper-admin role access"})
  async createHotelReception(@Body() createReceptionDto: CreateHotelReceptionDto) {
    const reception = await this.hotelService.createReception(createReceptionDto);
    return {
      message: "created hotel reception account successfully"
    }
  }
  @Post("/create-hotel-checker")
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  @ApiOperation({summary: "supper-admin role access"})
  async createHotelChecker(@UploadedFile()avatar: MulterFile, @Body() createCheckerDto: CreateHotelCheckerDto) {
    if(avatar) createCheckerDto.avatar = avatar.path.slice(7);
    const cleaner = await this.hotelService.createChecker(createCheckerDto);
    return {
      message: "created hotel checker account successfully"
    }
  }
  
  @Get()
  @ApiOperation({summary: "supper-admin role access"})
  async findAll() {
    const hotels = await this.hotelService.findAll();
    return {
      hotels
    }
  }
  
  @Get(':hotelID')
  @ApiOperation({summary: "supper-admin role access"})
  @ApiParam({name: "hotelID", type: "string"})
  async findOne(@Param() hotelDto: HotelDto) {
    const hotel = await this.hotelService.findOne(hotelDto.hotelID);
    return {
      hotel
    }
  }
  
  @Delete(':hotelID')
  @ApiParam({name: "hotelID", type: "string"})
  @ApiOperation({summary: "supper-admin role access"})
  async remove(@Param() hotelDto: HotelDto) {
    const deletedResult = await this.hotelService.remove(hotelDto.hotelID);
    return {
      message: "deleted hotel successfully"
    }
  }
}
