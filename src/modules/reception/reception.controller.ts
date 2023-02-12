import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {ReceptionService} from './reception.service';
import {CreateReceptionDto} from './dto/create-reception.dto';
import {UpdateReceptionDto} from './dto/update-reception.dto';
import {SwaggerConsumes} from "../../common/enums";
import {Roles} from "../../common/decorators/role.decorator";
import {ROLES} from "../../common/enums/role.enum";
import {ApiConsumes, ApiOperation, ApiParam, ApiTags} from '@nestjs/swagger';
import {AuthDecorator} from "../../common/decorators/auth.decorator";

@Controller('reception')
@AuthDecorator(ROLES.SUPERADMIN,ROLES.HOTELADMIN)
export class ReceptionController {
    constructor(private readonly receptionService: ReceptionService) {
    }

    @Post()
    create(@Body() createReceptionDto: CreateReceptionDto) {
        return this.receptionService.create(createReceptionDto);
    }

    @Get()
    findAll() {
        return this.receptionService.getRooms();
    }

    @Delete("/:receptionId")
    @ApiConsumes(SwaggerConsumes.URL_ENCODED, SwaggerConsumes.JSON)
    @ApiOperation({summary: "super admin and hotel admin can delete reception"})
    @Roles(ROLES.SUPERADMIN, ROLES.HOTELADMIN)
    @ApiParam({name: "receptionId"})
    deleteReception(@Param('receptionId') receptionId: string) {
        return this.receptionService.deleteReception(receptionId);
    }
}
