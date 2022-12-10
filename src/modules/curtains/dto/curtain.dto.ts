import { PartialType } from "@nestjs/swagger";
import { Curtain } from "../entities/curtains.entity";

export class CurtainDto extends PartialType(Curtain){}