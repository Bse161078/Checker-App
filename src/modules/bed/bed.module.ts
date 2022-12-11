import { Module } from '@nestjs/common';
import { BedService } from './bed.service';
import { BedController } from './bed.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../user/entities/user.entity';
import { Bed, BedSchema } from './entities/bed.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: User.name, schema: UserSchema},
      {name: Bed.name, schema: BedSchema}
    ])
  ],
  controllers: [BedController],
  providers: [BedService]
})
export class BedModule {}
