import { PartialType } from "@nestjs/swagger";
import { BethRoom } from "../entities/bethroom.entity";

export class BethRoomDto extends PartialType(BethRoom){
}