import { ApiProperty } from "@nestjs/swagger";
import {CheckerRoomStatus, RoomOccupationStatus, RoomStatus} from "../enum/room-type.enum";
import {ArrayMinSize, IsArray, isEnum, IsEnum, isNotEmpty, IsNotEmpty, IsOptional, IsString} from "class-validator";

export class SendAlertDto{
    @ApiProperty()
    roomID: string

    @ApiProperty()
    @IsArray()
    @IsEnum(RoomStatus,{each:true})
    status;
}
export class SetRoomStatus{


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    roomId: string


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    cleanerId: string

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