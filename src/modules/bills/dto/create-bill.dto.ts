import { ApiProperty } from "@nestjs/swagger";

export class CreateBillDto {
    @ApiProperty()
    cleanerID: string;
}
