import { Module } from '@nestjs/common';
import { CleanerService } from './cleaner.service';
import { CleanerController } from './cleaner.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../user/entities/user.entity';
import { CleaningHistory, CleaningHistorySchema } from '../room/entities/cleaning-history.entity';
import { Room, RoomSchema } from '../room/entities/room.entity';
import { Bill, BillSchema } from '../bills/entities/bill.entity';

@Module({
  imports: [MongooseModule.forFeature([
    { name: User.name, schema: UserSchema },
    { name: CleaningHistory.name, schema: CleaningHistorySchema },
    { name: Room.name, schema: RoomSchema },
    { name: Bill.name, schema: BillSchema },
  ])],
  controllers: [CleanerController],
  providers: [CleanerService]
})
export class CleanerModule { }
