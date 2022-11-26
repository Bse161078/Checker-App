import { ApiProperty } from "@nestjs/swagger";
import { Length } from "class-validator";

export class CreateCheckListDto {
    @ApiProperty({default: "check-list item"})
    @Length(3)
    title: string;
    @ApiProperty({default: "item question"})
    @Length(10, 200)
    topQuestion: string;
    @ApiProperty({type: "array", format: "string", isArray: true})
    comments: string[];
}
