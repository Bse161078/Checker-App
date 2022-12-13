import { PartialType } from '@nestjs/swagger';
import { CreateCheckerDto } from './create-checker.dto';

export class UpdateCheckerDto extends PartialType(CreateCheckerDto) {}
