import { ApiProperty } from "@nestjs/swagger";

export class CleanerIdDto {
    @ApiProperty()
    cleanerID: string;
}
export class CompanyIdDto {
    @ApiProperty()
    companyID: string;
}
export class HotelIdDto {
    @ApiProperty()
    hotelID: string;
}