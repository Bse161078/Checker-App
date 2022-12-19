import { ApiProperty } from "@nestjs/swagger";

export class MaterialIdDto {
    @ApiProperty()
    materialID: string;
}