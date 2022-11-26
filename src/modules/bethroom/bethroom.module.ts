import { Module } from '@nestjs/common';
import { BethroomService } from './bethroom.service';
import { BethroomController } from './bethroom.controller';

@Module({
  controllers: [BethroomController],
  providers: [BethroomService]
})
export class BethroomModule {}
