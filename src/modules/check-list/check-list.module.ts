import { Module } from '@nestjs/common';
import { CheckListService } from './check-list.service';
import { CheckListController } from './check-list.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckList, CheckListSchema } from './entities/check-list.entity';
import { User, UserSchema } from '../user/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: CheckList.name, schema: CheckListSchema},
      {name: User.name, schema: UserSchema}
    ])
  ],
  controllers: [CheckListController],
  providers: [CheckListService]
})
export class CheckListModule {}
