import { CheckerRoomStatus, RoomStatus } from "../enum/room-type.enum";
export declare class SendAlertDto {
    roomID: string;
    status: RoomStatus;
}
export declare class SetRoomStatus {
    roomID: string;
    status: CheckerRoomStatus;
}
