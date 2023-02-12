import {Module} from '@nestjs/common';
import {ReceptionService} from './reception.service';
import {ReceptionController} from './reception.controller';
import {Room, RoomSchema} from "../room/entities/room.entity";
import {CleaningHistory, CleaningHistorySchema} from "../room/entities/cleaning-history.entity";
import {User, UserSchema} from "../user/entities/user.entity";
import {RoomType, RoomTypeSchema} from "../room-type/entities/room-type.entity";
import {MongooseModule} from '@nestjs/mongoose';
import {Cleaner} from "../cleaner/entities/cleaner.entity";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Room.name, schema: RoomSchema},
            { name: Cleaner.name, schema: UserSchema },
            { name: User.name, schema: UserSchema },
        ])
    ],
    controllers: [ReceptionController],
    providers: [ReceptionService]
})
export class ReceptionModule {
}
