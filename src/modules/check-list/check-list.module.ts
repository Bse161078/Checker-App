import { Module } from '@nestjs/common';
import { AdminCheckListService } from './check-list.service';
import { AdminCheckListController } from './check-list.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckList, CheckListSchema } from './entities/check-list.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: CheckList.name, schema: CheckListSchema}
    ])
  ],
  controllers: [AdminCheckListController],
  providers: [AdminCheckListService]
})
export class AdminCheckListModule {}
