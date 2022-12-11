import { PartialType } from '@nestjs/swagger';
import { CreateShelvesDto } from './create-shelf.dto';

export class UpdateShelfDto extends PartialType(CreateShelvesDto) {}
