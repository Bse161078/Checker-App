import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Types } from "mongoose";

export class CreateShelvesDto {
    @ApiPropertyOptional({default: false, type: "boolean", })
    topQuestionStatus: boolean
    @ApiPropertyOptional({type: "string", format: "binary"})
    samplePhotoTopQuestion: string
    @ApiPropertyOptional({type: "boolean"})
    wipedStatus: boolean
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    wipedPhotos: string[]
    @ApiPropertyOptional({type: "boolean"})
    tableNotCleanStatus: boolean
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    tableNotCleanPhotos: string[]
    @ApiPropertyOptional({type: "boolean"})
    tvStatus: boolean
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    tvPhotos: string[]
    @ApiPropertyOptional({type: "boolean"})
    windowStatus: boolean
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    windowPhotos: string[]

    @ApiPropertyOptional({type: "boolean"})
    sideTableNotCleanStatus: boolean
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    sideTableNotCleanPhotos: string[]
    @ApiPropertyOptional({type: "boolean"})
    tvStandNotCleanStatus: boolean
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    tvStandNotCleanPhotos: string[]
    @ApiPropertyOptional({type: "boolean"})
    cabinetTopAndInsideSurfacesNotCleanStatus: boolean
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    cabinetTopAndInsideSurfacesNotCleanPhotos: string[]
    @ApiPropertyOptional({type: "boolean"})
    windowSillNotCleanStatus: boolean
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    windowSillNotCleanPhotos: string[]
    @ApiPropertyOptional({type: "boolean"})
    BrochuresNotNeatlyAndSortedInTheirPlaceStatus: boolean
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    BrochuresNotNeatlyAndSortedInTheirPlacePhotos: string[]
    @ApiPropertyOptional()
    DamageReportText: string
    @ApiPropertyOptional({type: "array", items: {type: "string", format: "binary"}})
    DamageReportPhotos: string[]
    room: Types.ObjectId
}
