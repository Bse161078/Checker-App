import { PartialType } from '@nestjs/swagger';
import { CreateBathroomDto } from './create-bathroom.dto';

export class UpdateBathroomDto extends PartialType(CreateBathroomDto) {}
