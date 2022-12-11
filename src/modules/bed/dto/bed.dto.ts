import { PartialType } from "@nestjs/swagger";
import { Bed } from "../entities/bed.entity";

export class BedDto extends PartialType(Bed){}