import { Module } from '@nestjs/common';
import { CurtainsService } from './curtains.service';
import { CurtainsController } from './curtains.controller';

@Module({
  controllers: [CurtainsController],
  providers: [CurtainsService]
})
export class CurtainsModule {}
