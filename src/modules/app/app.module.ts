import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BedModule } from '../bed/bed.module';
import { BethroomModule } from '../bethroom/bethroom.module';
import { AdminCheckListModule } from '../check-list/check-list.module';
import { CurtainsModule } from '../curtains/curtains.module';
import { FloorModule } from '../floor/floor.module';
import { LevelModule } from '../level/level.module';
import { AdminRoomModule } from '../room/room.module';
import { ShelvesModule } from '../shelves/shelves.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017"),
    LevelModule,
    AdminRoomModule,
    AdminCheckListModule,
    FloorModule,
    CurtainsModule,
    ShelvesModule,
    BedModule,
    BethroomModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
