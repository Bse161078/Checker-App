import { ApiProperty } from "@nestjs/swagger";

export class RoomIdDto {
    @ApiProperty()
    roomID: string;
}
