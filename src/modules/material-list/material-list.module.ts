import { Module } from '@nestjs/common';
import { MaterialListService } from './material-list.service';
import { MaterialListController } from './material-list.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Material, MaterialSchema } from './entities/material-list.entity';
import { User, UserSchema } from '../user/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Material.name, schema: MaterialSchema},
      {name: User.name, schema: UserSchema},
    ])
  ],
  controllers: [MaterialListController],
  providers: [MaterialListService]
})
export class MaterialListModule {}
