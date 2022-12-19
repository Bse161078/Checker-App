import { Controller, Get, Post, Body, Param, Delete, UploadedFile } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from 'src/common/enums';
import { AuthDecorator } from 'src/common/decorators/auth.decorator';
import { ROLES } from 'src/common/enums/role.enum';
import { CreateHotelCheckerDto, CreateHotelCleanerDto, HotelDto } from './dto/hotel.dto';
import { MulterFile } from 'src/common/types/public';

@Controller('hotel')
@ApiTags("hotel-admin")
@AuthDecorator(ROLES.SUPERADMIN)
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Post()
  @ApiConsumes(SwaggerConsumes.URL_ENCODED, SwaggerConsumes.JSON)
  async create(@Body() createHotelDto: CreateHotelDto) {
    const hotel = await this.hotelService.create(createHotelDto);
    return {
      message: "created hotel account successfully"
    }
  }
  @Post("/create-hotel-cleaner")
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  async createHotelCleaner(@UploadedFile()avatar: MulterFile, @Body() createCleanerDto: CreateHotelCleanerDto) {
    if(avatar) createCleanerDto.avatar = avatar.path.slice(7);
    const cleaner = await this.hotelService.createCleaner(createCleanerDto);
    return {
      message: "created hotel cleaner account successfully"
    }
  }
  @Post("/create-hotel-checker")
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  async createHotelChecker(@UploadedFile()avatar: MulterFile, @Body() createCheckerDto: CreateHotelCheckerDto) {
    if(avatar) createCheckerDto.avatar = avatar.path.slice(7);
    const cleaner = await this.hotelService.createChecker(createCheckerDto);
    return {
      message: "created hotel checker account successfully"
    }
  }

  @Get()
  async findAll() {
    const hotels = await this.hotelService.findAll();
    return {
      hotels
    }
  }

  @Get(':hotelID')
  @ApiParam({name: "hotelID", type: "string"})
  async findOne(@Param() hotelDto: HotelDto) {
    const hotel = await this.hotelService.findOne(hotelDto.hotelID);
    return {
      hotel
    }
  }

  @Delete(':hotelID')
  @ApiParam({name: "hotelID", type: "string"})
  async remove(@Param() hotelDto: HotelDto) {
    const deletedResult = await this.hotelService.remove(hotelDto.hotelID);
    return {
      message: "deleted hotel successfully"
    }
  }
}
