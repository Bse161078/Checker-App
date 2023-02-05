import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Length } from "class-validator";
import { Types } from "mongoose";

@Schema({toObject: {
    virtuals: true
}})
export class HotelLogo {

    @Prop()
    @ApiProperty()
    logo: string

    @Prop({ref: "User"})
    hotel: Types.ObjectId
}
export type HotelLogoDocument = HotelLogo & Document;
export const HotelLogoSchema = SchemaFactory.createForClass(HotelLogo)