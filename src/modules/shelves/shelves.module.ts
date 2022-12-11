import { Module } from '@nestjs/common';
import { ShelvesService } from './shelves.service';
import { ShelvesController } from './shelves.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Shelves, ShelvesSchema } from './entities/shelves.entity';
import { User, UserSchema } from '../user/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Shelves.name, schema: ShelvesSchema},
      {name: User.name, schema: UserSchema},
    ])
  ],
  controllers: [ShelvesController],
  providers: [ShelvesService]
})
export class ShelvesModule {}
