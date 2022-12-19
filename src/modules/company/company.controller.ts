import { Controller, Get, Post, Body, Param, Delete, UploadedFile } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { ApiConsumes, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from 'src/common/enums';
import { AuthDecorator } from 'src/common/decorators/auth.decorator';
import { ROLES } from 'src/common/enums/role.enum';
import { CompanyDto, CreateCompanyCheckerDto, CreateCompanyCleanerDto } from './dto/company.dto';
import { MulterFile } from 'src/common/types/public';

@Controller('company')
@ApiTags('company-supperAdmin')
@AuthDecorator(ROLES.SUPERADMIN)
export class CompanyController {
  constructor(private readonly companyService: CompanyService) { }

  @Post()
  @ApiConsumes(SwaggerConsumes.URL_ENCODED, SwaggerConsumes.JSON)
  @ApiOperation({summary: "supper-admin role access"})
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    const company = await this.companyService.create(createCompanyDto);
    return {
      message: "created company account successfully"
    }
  }
  @Post("/create-company-cleaner")
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  @ApiOperation({summary: "supper-admin role access"})
  async createHotelCleaner(@UploadedFile() avatar: MulterFile, @Body() createCleanerDto: CreateCompanyCleanerDto) {
    if (avatar) createCleanerDto.avatar = avatar.path.slice(7);
    const cleaner = await this.companyService.createCleaner(createCleanerDto);
    return {
      message: "created company cleaner account successfully"
    }
  }
  @Post("/create-company-checker")
  @ApiOperation({summary: "supper-admin role access"})
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  async createHotelChecker(@UploadedFile() avatar: MulterFile, @Body() createCheckerDto: CreateCompanyCheckerDto) {
    if (avatar) createCheckerDto.avatar = avatar.path.slice(7);
    const cleaner = await this.companyService.createChecker(createCheckerDto);
    return {
      message: "created company checker account successfully"
    }
  }
  @ApiOperation({summary: "supper-admin role access"})
  @Get()
  async findAll() {
    const companies = await this.companyService.findAll();
    return {
      companies
    }
  }
  
  @Get(':companyID')
  @ApiParam({ name: "companyID", type: "string" })
  @ApiOperation({summary: "supper-admin role access"})
  async findOne(@Param() companyDto: CompanyDto) {
    const company = await this.companyService.findOne(companyDto.companyID);
    return {
      company
    }
  }
  
  @Delete(':companyID')
  @ApiParam({ name: "companyID", type: "string" })
  @ApiOperation({summary: "supper-admin role access"})
  async remove(@Param() companyDto: CompanyDto) {
    const deletedResult = await this.companyService.remove(companyDto.companyID);
    return {
      message: "deleted company successfully"
    }
  }
}
