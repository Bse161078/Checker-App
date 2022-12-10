import { ApiProperty } from "@nestjs/swagger";
import { Length } from "class-validator";

export class RegisterDto {
    @Length(4, 20)
    @ApiProperty({default: "admin"})
    username: string;
    @Length(6, 16)
    @ApiProperty({default: "123456", format: "password"})
    password: string;
}