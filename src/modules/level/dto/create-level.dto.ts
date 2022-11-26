import { ApiProperty } from "@nestjs/swagger";

export class CreateLevelDto {
    @ApiProperty({default: "first level", required: true})
    title: string;
}
