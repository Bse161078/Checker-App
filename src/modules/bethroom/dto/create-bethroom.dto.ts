import { ApiPropertyOptional } from "@nestjs/swagger"

export class CreateBethroomDto {
    @ApiPropertyOptional({ default: false, type: "boolean", })
    topQuestionStatus: boolean
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    samplePhotoTopQuestion: string[]
    @ApiPropertyOptional({ type: "boolean" })
    tilesAreNotMoppedStatus: boolean
    @ApiPropertyOptional({ type: "array", items: { type: "string", format: "binary" } })
    tilesAreNotMoppedPhotos: string[]
    @ApiPropertyOptional({ type: "boolean" })
    toiletIsNotWipedStatus: boolean
    @ApiPropertyOptional({ type: "array", items: { type: "string", format: "binary" } })
    toiletIsNotWipedPhotos: string[]
    @ApiPropertyOptional({ type: "boolean" })
    thereIsDirtInTheShoweStatus: boolean
    @ApiPropertyOptional({ type: "array", items: { type: "string", format: "binary" } })
    thereIsDirtInTheShowePhotos: string[]
    @ApiPropertyOptional({ type: "boolean" })
    shelvesAreNotWipedStatus: boolean
    @ApiPropertyOptional({ type: "array", items: { type: "string", format: "binary" } })
    shelvesAreNotWipedPhotos: string[]
    @ApiPropertyOptional({ type: "boolean" })
    traysAreNotFilledStatus: boolean
    @ApiPropertyOptional({ type: "array", items: { type: "string", format: "binary" } })
    traysAreNotFilledPhotos: string[]
    @ApiPropertyOptional()
    DamageReportText: string
    @ApiPropertyOptional({ type: "array", items: { type: "string", format: "binary" } })
    DamageReportPhotos: string[]
}
