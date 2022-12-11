import { Module } from '@nestjs/common';
import { BathroomService } from './bathroom.service';
import { BathroomController } from './bathroom.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BathRoom, BathRoomSchema } from './entities/bathroom.entity';
import { User, UserSchema } from '../user/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: BathRoom.name, schema: BathRoomSchema},
      {name: User.name, schema: UserSchema},
    ])
  ],
  controllers: [BathroomController],
  providers: [BathroomService]
})
export class BathroomModule {}
