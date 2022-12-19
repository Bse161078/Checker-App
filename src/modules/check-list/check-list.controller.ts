import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiConsumes, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CheckListService } from './check-list.service';
import { CreateCheckListDto } from './dto/create-check-list.dto';
import { UpdateCheckListDto } from './dto/update-check-list.dto';
import { AuthDecorator } from 'src/common/decorators/auth.decorator';
import { ROLES } from 'src/common/enums/role.enum';
import { Roles } from 'src/common/decorators/role.decorator';

@Controller('check-list')
@ApiTags("checkList")
@AuthDecorator(ROLES.CHECKER, ROLES.COMPANYADMIN, ROLES.HOTELADMIN)
export class CheckListController {
  constructor(private readonly checkListService: CheckListService) { }

  @Post()
  @ApiConsumes("application/json")
  @ApiOperation({ summary: "checker role access" })
  @Roles(ROLES.CHECKER)
  async create(@Body() createCheckListDto: CreateCheckListDto) {
    const createdResult = await this.checkListService.create(createCheckListDto);
    return {
      message: "created/updated order list successfully"
    }
  }

  @Get()
  @Roles(ROLES.CHECKER, ROLES.HOTELADMIN, ROLES.COMPANYADMIN)
  @ApiOperation({ summary: "checker and hotel and company role access" })
  async findAll() {
    const checkList = await this.checkListService.findAll();
    return {
      checkList
    }
  }

  @Get(':id')
  @Roles(ROLES.CHECKER, ROLES.HOTELADMIN, ROLES.COMPANYADMIN)
  @ApiOperation({ summary: "checker and hotel and company role access" })
  @ApiParam({ name: "id" })
  async findOne(@Param('id') id: string) {
    const checkList = await this.checkListService.findOne(id);
    return { checkList }
  }

  @Delete(':id')
  @Roles(ROLES.HOTELADMIN)
  @ApiOperation({ summary: "hotel role access" })
  @ApiParam({ name: "id" })
  async remove(@Param('id') id: string) {
    const deletedResult = await this.checkListService.remove(id);
    return {
      message: "deleted order list successfully"
    }
  }
}
