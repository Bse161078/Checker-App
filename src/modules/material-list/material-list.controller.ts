import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MaterialListService } from './material-list.service';
import { CreateMaterialListDto } from './dto/create-material-list.dto';
import { UpdateMaterialListDto } from './dto/update-material-list.dto';
import { ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from 'src/common/enums';
import { AuthDecorator } from 'src/common/decorators/auth.decorator';
import { ROLES } from 'src/common/enums/role.enum';

@Controller('material-list')
@ApiTags('Material-List')
@AuthDecorator(ROLES.HOTELADMIN, ROLES.CHECKER)
export class MaterialListController {
  constructor(private readonly materialListService: MaterialListService) {}

  @ApiOperation({summary: "checker and hotel-admin role access"})
  @ApiConsumes(SwaggerConsumes.URL_ENCODED, SwaggerConsumes.JSON)
  @Post()
  async create(@Body() createMaterialListDto: CreateMaterialListDto) {
    const createdResult = await this.materialListService.create(createMaterialListDto);
    return {
      message: "created material item successfully"
    }
  }
  
  @ApiOperation({summary: "checker and hotel-admin role access"})
  @Get()
  async findAll() {
    const materials = await this.materialListService.findAll();
    return {
      materials
    }
  }
  
  @ApiOperation({summary: "checker and hotel-admin role access"})
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const material = await this.materialListService.findOne(id);
    return {
      material
    }
  }
  
  @ApiOperation({summary: "checker and hotel-admin role access"})
  @Patch(':id')
  @ApiConsumes(SwaggerConsumes.URL_ENCODED, SwaggerConsumes.JSON)
  async update(@Param('id') id: string, @Body() updateMaterialListDto: UpdateMaterialListDto) {
    const updatedResult = await this.materialListService.update(id, updateMaterialListDto);
    return {
      message: "updated material item successfully"
    }
  }
  
  @ApiOperation({summary: "checker and hotel-admin role access"})
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deletedResult = await this.materialListService.remove(id);
    return {
      message: "deleted material item successfully"
    }
  }
}
