import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthDecorator } from 'src/common/decorators/auth.decorator';
import { Roles } from 'src/common/decorators/role.decorator';
import { UploadedFileDecorator } from 'src/common/decorators/upload.decorators';
import { GetUser } from 'src/common/decorators/user.decorator';
import { SwaggerConsumes } from 'src/common/enums';
import { ROLES } from 'src/common/enums/role.enum';
import { UploadImageInterceptor } from 'src/common/interceptors/file-upload.interceptor';
import { MulterFile } from 'src/common/types/public';
import { RoomIdDto } from '../room/dto/room.dto';
import { CleanerService } from './cleaner.service';
import { CreateCleanerDto } from './dto/create-cleaner.dto';
import { UpdateCleanerDto } from './dto/update-cleaner.dto';

@Controller('cleaner')
@ApiTags("cleaner")
@AuthDecorator(ROLES.HOTELADMIN, ROLES.COMPANYADMIN)
export class CleanerController {
  constructor(private readonly cleanerService: CleanerService) { }
  @Post()
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  @UseInterceptors(UploadImageInterceptor('avatar'))
  async create(@UploadedFileDecorator('image/*') avatar: MulterFile, @Body() createCleanerDto: CreateCleanerDto) {
    createCleanerDto.avatar = avatar.path.slice(7);
    const cleaner = await this.cleanerService.create(createCleanerDto);
    return { cleaner }
  }

  @Get()
  @Roles(ROLES.CHECKER, ROLES.COMPANYADMIN, ROLES.HOTELADMIN)
  async findAll() {
    const cleaners = await this.cleanerService.findAll();
    return { cleaners }
  }
  @Get("/start-cleaning/:roomID")
  @ApiParam({name: "roomID", type: 'string'})
  @Roles(ROLES.CLEANER)
  async startCleaning(@Param() param: RoomIdDto, @GetUser() user: Express.User){
    const {roomID} = param;
    const cleaningRoomStatus = await this.cleanerService.startCleaningRoom(roomID);
    return {message: `cleaner starts cleaning at ${cleaningRoomStatus.cleaningStartAt}`}
  }
  @Get("/finish-cleaning/:roomID")
  @ApiParam({name: "roomID", type: 'string'})
  @Roles(ROLES.CLEANER)
  async finishCleaning(@Param() param: RoomIdDto, @GetUser() user: Express.User){
    const {roomID} = param;
    const cleaningRoomStatus = await this.cleanerService.endCleaningRoom(roomID);
    return {message: `cleaner finished cleaning at ${cleaningRoomStatus.cleaningEndAt}`}
  }
  @Get(':id')
  @Roles(ROLES.CHECKER, ROLES.COMPANYADMIN, ROLES.HOTELADMIN)
  findOne(@Param('id') id: string) {
    const cleaner = this.cleanerService.findOne(id);
    return { cleaner }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCleanerDto: UpdateCleanerDto) {
    await this.cleanerService.update(id, updateCleanerDto);
    return { message: "updated cleaner successfully" }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.cleanerService.remove(id);
    return { message: "deleted cleaner successfully" }
  }

}
