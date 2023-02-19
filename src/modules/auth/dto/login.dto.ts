import { ApiProperty } from "@nestjs/swagger";
import { Length } from "class-validator";

export class LoginDto {
    @Length(4)
    @ApiProperty({default: "admin"})
    username: string;
    @Length(6, 16)
    @ApiProperty({default: "123456", format: "password"})
    password: string;
}