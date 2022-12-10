import { PartialType } from '@nestjs/swagger';
import { CreateCleanerDto } from './create-cleaner.dto';

export class UpdateCleanerDto extends PartialType(CreateCleanerDto) {}
