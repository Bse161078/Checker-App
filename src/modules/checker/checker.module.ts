import { Module } from '@nestjs/common';
import { CheckerService } from './checker.service';
import { CheckerController } from './checker.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../user/entities/user.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [CheckerController],
  providers: [CheckerService]
})
export class CheckerModule { }
