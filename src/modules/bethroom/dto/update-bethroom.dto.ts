import { PartialType } from '@nestjs/swagger';
import { CreateBethroomDto } from './create-bethroom.dto';

export class UpdateBethroomDto extends PartialType(CreateBethroomDto) {}
