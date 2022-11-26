import { Module } from '@nestjs/common';
import { AdminRoomService } from './room.service';
import { AdminRoomController } from './room.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Room, RoomSchema } from './entities/room.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Room.name, schema: RoomSchema}
    ])
  ],
  controllers: [AdminRoomController],
  providers: [AdminRoomService]
})
export class AdminRoomModule {}
