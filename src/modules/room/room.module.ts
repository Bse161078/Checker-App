import { Module } from '@nestjs/common';
import { AdminRoomService } from './room.service';
import { AdminRoomController } from './room.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Room, RoomSchema } from './entities/room.entity';
import { Level, LevelSchema } from '../level/entities/level.entity';
import { User, UserSchema } from '../user/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Room.name, schema: RoomSchema},
      // {name: Level.name, schema: LevelSchema},
      {name: User.name, schema: UserSchema},
    ])
  ],
  controllers: [AdminRoomController],
  providers: [AdminRoomService]
})
export class AdminRoomModule {}
