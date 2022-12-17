import { Module } from '@nestjs/common';
import { RoomTypeService } from './room-type.service';
import { RoomTypeController } from './room-type.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomType, RoomTypeSchema } from './entities/room-type.entity';
import { Room, RoomSchema } from '../room/entities/room.entity';
import { User, UserSchema } from '../user/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: RoomType.name, schema: RoomTypeSchema},
      {name: Room.name, schema: RoomSchema},
      {name: User.name, schema: UserSchema},
    ])
  ],
  controllers: [RoomTypeController],
  providers: [RoomTypeService]
})
export class RoomTypeModule {}
