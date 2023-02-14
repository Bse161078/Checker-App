import { ApiProperty } from "@nestjs/swagger";
import {CheckerRoomStatus, RoomOccupationStatus, RoomStatus} from "../enum/room-type.enum";
import {
    ArrayMinSize,
    IsArray,
    IsBoolean,
    isEnum,
    IsEnum,
    isNotEmpty,
    IsNotEmpty,
    IsOptional,
    IsString
} from "class-validator";
import {ROOM_STATUS} from "../../../common/enums/room-status.enum";

export class SendAlertDto{
    @ApiProperty()
    roomID: string

    @ApiProperty()
    @IsArray()
    @IsEnum(RoomStatus,{each:true})
    status;
}





export class StartCleaningDto {


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    roomId: string

}


export class UpdateCleaningStatus {


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    cleaningHistoryId: string


    @ApiProperty()
    @IsEnum(ROOM_STATUS)
    @IsNotEmpty()
    status;


}

export class SetRoomStatus{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    roomId: string


    @ApiProperty({type: "string", enum: CheckerRoomStatus})
    @IsNotEmpty()
    @IsEnum(CheckerRoomStatus)
    clean_status: CheckerRoomStatus

    @ApiProperty({type: "string", enum: RoomOccupationStatus})
    @IsNotEmpty()
    @IsEnum(RoomOccupationStatus)
    occupation_status: RoomOccupationStatus


}


export class SearchRoom {

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    type;


    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    cleaning_status;


    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    occupation_status;

}