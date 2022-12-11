import { ApiPropertyOptional } from "@nestjs/swagger";
import { Types } from "mongoose";

export class CreateCurtainDto {
    @ApiPropertyOptional({default: false, type: "bool", })
    topQuestionStatus: boolean
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    samplePhotoTopQuestion: string[];
    @ApiPropertyOptional({type: "boolean"})
    curtainsNotCleanStatus: boolean
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    curtainsNotCleanPhotos: string[]
    @ApiPropertyOptional({type: "boolean"})
    curtainsHaveWrinklesStatus: boolean
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    curtainsHaveWrinklesPhotos: string[]
    @ApiPropertyOptional()
    DamageReportText: string
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    DamageReportPhotos: string[]
    room: Types.ObjectId
}
