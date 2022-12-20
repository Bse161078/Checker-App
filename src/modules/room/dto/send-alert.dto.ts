import { ApiProperty } from "@nestjs/swagger";
import { CheckerRoomStatus, RoomStatus } from "../enum/room-type.enum";

export class SendAlertDto{
    @ApiProperty()
    roomID: string
    @ApiProperty({type: "string", enum: RoomStatus})
    status: RoomStatus
}
export class SetRoomStatus{
    @ApiProperty()
    roomID: string
    @ApiProperty({type: "string", enum: CheckerRoomStatus})
    status: CheckerRoomStatus
}