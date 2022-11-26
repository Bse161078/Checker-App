import { Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
    [x:string]: string
}
export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User)