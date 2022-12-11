import { PartialType } from "@nestjs/swagger";
import { Shelves } from "../entities/shelves.entity";

export class ShelvesDto extends PartialType(Shelves){}