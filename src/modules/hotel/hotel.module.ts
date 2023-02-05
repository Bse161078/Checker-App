import {Module} from '@nestjs/common';
import {HotelService} from './hotel.service';
import {HotelController} from './hotel.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {User, UserSchema} from '../user/entities/user.entity';
import {HotelLogoSchema} from "./entities/hotel-logo.entity";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: User.name, schema: UserSchema},
            {name: 'hotel-logos', schema: HotelLogoSchema},
        ]),
    ],
    controllers: [HotelController],
    providers: [HotelService]
})
export class HotelModule {
}
