import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateCurtainDto {
    @ApiPropertyOptional({default: false, type: "boolean", })
    topQuestionStatus: boolean
    @ApiPropertyOptional({type: "string", format: "binary"})
    samplePhotoTopQuestion: string
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
}
