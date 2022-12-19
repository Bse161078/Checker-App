import { ApiProperty } from "@nestjs/swagger";

export class CheckerIdDto {
    @ApiProperty()
    checkerID: string
}