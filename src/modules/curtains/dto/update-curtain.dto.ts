import { PartialType } from '@nestjs/swagger';
import { CreateCurtainDto } from './create-curtain.dto';

export class UpdateCurtainDto extends PartialType(CreateCurtainDto) {}
