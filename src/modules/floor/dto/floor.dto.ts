import { PartialType } from "@nestjs/swagger";
import { Floor } from "../entities/floor.entity";

export class FloorDto extends PartialType(Floor){
}