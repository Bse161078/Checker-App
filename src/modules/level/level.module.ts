import { Module } from '@nestjs/common';
import { LevelService } from './level.service';
import { LevelController } from './level.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Level, LevelSchema } from './entities/level.entity';
import { Room, RoomSchema } from '../room/entities/room.entity';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Level.name, schema: LevelSchema},
    {name: Room.name, schema: RoomSchema},
  ])],
  controllers: [LevelController],
  providers: [LevelService]
})
export class LevelModule {}
