import { Module } from '@nestjs/common';
import { CurtainsService } from './curtains.service';
import { CurtainsController } from './curtains.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Curtain, CurtainSchema } from './entities/curtains.entity';
import { User, UserSchema } from '../user/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Curtain.name, schema: CurtainSchema},
      {name: User.name, schema: UserSchema},
    ])
  ],
  controllers: [CurtainsController],
  providers: [CurtainsService]
})
export class CurtainsModule {}
