import { Module } from '@nestjs/common';
import { BethroomService } from './bethroom.service';
import { BethroomController } from './bethroom.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BethRoom, BethRoomSchema } from './entities/bethroom.entity';
import { User, UserSchema } from '../user/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: BethRoom.name, schema: BethRoomSchema},
      {name: User.name, schema: UserSchema},
    ])
  ],
  controllers: [BethroomController],
  providers: [BethroomService]
})
export class BethroomModule {}
