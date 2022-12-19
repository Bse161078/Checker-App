import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AuthDecorator } from 'src/common/decorators/auth.decorator';
import { ROLES } from 'src/common/enums/role.enum';
import { SwaggerConsumes } from 'src/common/enums';
import { GetUser } from 'src/common/decorators/user.decorator';

@Controller('user')
@ApiTags("User")
@AuthDecorator(ROLES.SUPERADMIN)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiConsumes(SwaggerConsumes.URL_ENCODED, SwaggerConsumes.JSON)
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    return {user}
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiConsumes(SwaggerConsumes.URL_ENCODED, SwaggerConsumes.JSON)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    this.userService.update(id, updateUserDto);
    return {message: "updated user successfully"}
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.userService.remove(id);
    return {message: "deleted user successfully"}
  }
}
