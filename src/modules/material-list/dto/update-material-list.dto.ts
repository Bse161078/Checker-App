import { PartialType } from '@nestjs/swagger';
import { CreateMaterialListDto } from './create-material-list.dto';

export class UpdateMaterialListDto extends PartialType(CreateMaterialListDto) {}
