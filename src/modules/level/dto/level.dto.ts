import { ApiProperty } from "@nestjs/swagger";

export class LevelIdDto {
    @ApiProperty()
    levelID: string;
}