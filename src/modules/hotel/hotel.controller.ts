import {Controller, Get, Post, Body, Param, Delete, UploadedFile, UseInterceptors, UploadedFiles} from '@nestjs/common';
import {HotelService} from './hotel.service';
import {AddCompanyToHotel, CreateHotelDto} from './dto/create-hotel.dto';
import {ApiConsumes, ApiOperation, ApiParam, ApiTags} from '@nestjs/swagger';
import {SwaggerConsumes} from 'src/common/enums';
import {AuthDecorator} from 'src/common/decorators/auth.decorator';
import {ROLES} from 'src/common/enums/role.enum';
import {
    CreateHotelCheckerDto,
    CreateHotelCleanerDto,
    CreateHotelReceptionDto,
    HotelDto,
    UpdateHotelLogoDto
} from './dto/hotel.dto';
import {MulterFile} from 'src/common/types/public';
import {Roles} from 'src/common/decorators/role.decorator';
import {FileInterceptor} from "@nestjs/platform-express";
import {BathRoomFileUpload} from "../bathroom/interceptors/upload-file-bathroom.interceptor";
import {HotelLogoUpload} from "./interceptors/upload-file-bathroom.interceptor";
import {IBathRoomFilesUpload} from "../bathroom/interfaces/files.interface";
import {LogoFileUploadDto} from "./interface/files.interface";
import {getObjectFiles} from "../../common/utils/functions";

@Controller('hotel')
@ApiTags("hotel-supperAdmin")
@AuthDecorator(ROLES.SUPERADMIN)
export class HotelController {
    constructor(private readonly hotelService: HotelService) {
    }

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
        if (avatar) createCleanerDto.avatar = avatar.path.slice(7);
        const cleaner = await this.hotelService.createCleaner(createCleanerDto);
        return {
            message: "created hotel cleaner account successfully"
        }
    }

    @Post("/create-hotel-reception")
    @ApiConsumes(SwaggerConsumes.URL_ENCODED, SwaggerConsumes.JSON)
    @ApiOperation({summary: "supper-admin and hotel-admin role access"})
    @Roles(ROLES.SUPERADMIN, ROLES.HOTELADMIN)
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
        if (avatar) createCheckerDto.avatar = avatar.path.slice(7);
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

    @Get("/receptions/:hotelID")
    @ApiOperation({summary: "supper-admin admin hotel-admin role access"})
    @ApiParam({name: "hotelID", type: "string"})
    async receptions(@Param() hotelDto: HotelDto) {
        const receptions = await this.hotelService.receptions(hotelDto.hotelId);
        return {
            receptions
        }
    }

    @Get(':hotelID')
    @ApiOperation({summary: "supper-admin role access"})
    @ApiParam({name: "hotelID", type: "string"})
    async findOne(@Param() hotelDto: HotelDto) {
        const hotel = await this.hotelService.findOne(hotelDto.hotelId);
        return {
            hotel
        }
    }

    @Delete(':hotelID')
    @ApiParam({name: "hotelID", type: "string"})
    @ApiOperation({summary: "supper-admin role access"})
    async remove(@Param() hotelDto: HotelDto) {
        const deletedResult = await this.hotelService.remove(hotelDto.hotelId);
        return {
            message: "deleted hotel successfully"
        }
    }


    @Post("/logo")
    @ApiConsumes(SwaggerConsumes.MULTIPART)
    @UseInterceptors(HotelLogoUpload)
    @ApiOperation({summary: "update hotel logo"})
    @Roles(ROLES.SUPERADMIN, ROLES.HOTELADMIN)
    async updateHotelLogo(@UploadedFiles() logo: LogoFileUploadDto,@Body() updateHotelLogoDto: UpdateHotelLogoDto) {
        let hotelLogo="";
        const newFile: any = getObjectFiles(logo);

        const cleaner = await this.hotelService.updateHotelLogo(newFile.logo[0]);
        return {
            message: "logo updated"
        }
    }


    @Get(':hotelId/logo')
    @ApiOperation({summary: "supper-admin role access"})
    @ApiParam({name: "hotelID", type: "string"})
    @Roles(ROLES.SUPERADMIN, ROLES.HOTELADMIN)
    async findHotelLogo(@Param() hotelDto: HotelDto) {
        const hotel = await this.hotelService.findHotelLogo(hotelDto.hotelId);
        return {
            hotel
        }
    }
}
