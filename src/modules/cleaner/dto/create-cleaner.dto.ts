import { ApiProperty } from "@nestjs/swagger";
import { Length } from "class-validator";
import { Types } from "mongoose";

export class CreateCleanerDto {
    @ApiProperty({type: "string"})
    @Length(3)
    fullname: string;
    @ApiProperty({example: "09:00"})
    @Length(5,5)
    startAt: string;
    @ApiProperty({example: "18:20"})
    @Length(5,5)
    endAt: string;
    @ApiProperty()
    @Length(3)
    username: string;
    @ApiProperty()
    @Length(6, 16)
    password: string;
    @ApiProperty({type: "integer"})
    salaryPerRoom: number;
    @ApiProperty({type: "integer"})
    roomCountForCleanEachDay: number;
    @ApiProperty({type: "string"})
    hotelID: string;
    
    company?: Types.ObjectId;
    hotel?: Types.ObjectId;
}
