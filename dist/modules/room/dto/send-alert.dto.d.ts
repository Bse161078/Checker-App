import { CheckerRoomStatus, RoomOccupationStatus } from "../enum/room-type.enum";
export declare class SendAlertDto {
    roomID: string;
    status: any;
}
export declare class StartCleaningDto {
    roomId: string;
}
export declare class UpdateCleaningStatus {
    cleaningHistoryId: string;
    status: any;
}
export declare class SetRoomStatus {
    roomId: string;
    clean_status: CheckerRoomStatus;
    occupation_status: RoomOccupationStatus;
}
export declare class SearchRoom {
    type: any;
    cleaning_status: any;
    occupation_status: any;
}
