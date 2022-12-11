import { ApiPropertyOptional } from "@nestjs/swagger"
import { Types } from "mongoose"

export class CreateBedDto {
    @ApiPropertyOptional({ default: false, type: "boolean", })
    topQuestionStatus: boolean
    @ApiPropertyOptional({ type: "array", items: { type: "string", format: "binary" } })
    samplePhotoTopQuestion: string[]
    @ApiPropertyOptional({ type: "boolean" })
    bedDoesNotLookFreshStatus: boolean
    @ApiPropertyOptional({ type: "array", items: { type: "string", format: "binary" } })
    bedDoesNotLookFreshPhotos: string[]
    @ApiPropertyOptional({ type: "boolean" })
    bedSheetInNotProperlyTightenedStatus: boolean
    @ApiPropertyOptional({ type: "array", items: { type: "string", format: "binary" } })
    bedSheetInNotProperlyTightenedPhotos: string[]

    @ApiPropertyOptional()
    DamageReportText: string
    @ApiPropertyOptional({ type: "array", items: { type: "string", format: "binary" } })
    DamageReportPhotos: string[]
    room: Types.ObjectId

}

