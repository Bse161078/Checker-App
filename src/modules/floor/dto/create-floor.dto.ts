import { ApiPropertyOptional } from "@nestjs/swagger";
import { Types } from "mongoose";

export class CreateFloorDto {
    @ApiPropertyOptional({default: false, type: "bool", })
    topQuestionStatus: boolean
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    samplePhotoTopQuestion: string[]
    @ApiPropertyOptional({type: Boolean, default: false})
    roomIsNotVacuumedStatus: boolean
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    roomIsNotVacuumedPhotos: string[]
    @ApiPropertyOptional({type: Boolean, default: false})
    roomHasStrongStainsThatCanNotBeCleanedByUsStatus: boolean
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    roomHasStrongStainsThatCanNotBeCleanedByUsPhotos: string[]
    @ApiPropertyOptional({type: Boolean, default: false})
    DamageCausedByGuestsStatus: boolean
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    DamageCausedByGuestsPhotos: string[]
    @ApiPropertyOptional({default: " "})
    DamageReportText: string
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    DamageReportPhotos: string[]
    room: Types.ObjectId
}
