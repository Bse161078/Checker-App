import { PartialType } from "@nestjs/swagger";
import { BathRoom } from "../entities/bathroom.entity";

export class BathRoomDto extends PartialType(BathRoom){
}