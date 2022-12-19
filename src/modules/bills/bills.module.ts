import { Module } from '@nestjs/common';
import { BillsService } from './bills.service';
import { BillsController } from './bills.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bill, BillSchema } from './entities/bill.entity';
import { User, UserSchema } from '../user/entities/user.entity';
import { CleaningHistory, CleaningHistorySchema } from '../room/entities/cleaning-history.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Bill.name, schema: BillSchema},
      {name: User.name, schema: UserSchema},
      {name: CleaningHistory.name, schema: CleaningHistorySchema},
    ])
  ],
  controllers: [BillsController],
  providers: [BillsService]
})
export class BillsModule {}
