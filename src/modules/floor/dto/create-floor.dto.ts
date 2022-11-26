import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateFloorDto {
    @ApiPropertyOptional({default: false, type: "boolean", })
    topQuestionStatus: boolean
    @ApiPropertyOptional({type: "string", format: "binary"})
    samplePhotoTopQuestion: string
    @ApiPropertyOptional({type: "boolean"})
    roomIsNotVacuumedStatus: boolean
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    roomIsNotVacuumedPhotos: string[]
    @ApiPropertyOptional({type: "boolean"})
    roomHasStrongStainsThatCanNotBeCleanedByUsStatus: boolean
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    roomHasStrongStainsThatCanNotBeCleanedByUsPhotos: string[]
    @ApiPropertyOptional({type: "boolean"})
    DamageCausedByGuestsStatus: boolean
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    DamageCausedByGuestsPhotos: string[]
    @ApiPropertyOptional()
    DamageReportText: string
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    DamageReportPhotos: string[]
}
