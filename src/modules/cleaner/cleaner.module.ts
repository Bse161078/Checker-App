import { Module } from '@nestjs/common';
import { CleanerService } from './cleaner.service';
import { CleanerController } from './cleaner.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../user/entities/user.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [CleanerController],
  providers: [CleanerService]
})
export class CleanerModule { }
