import {Module} from '@nestjs/common';
import {AdminRoomService} from './room.service';
import {AdminRoomController} from './room.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {Room, RoomSchema} from './entities/room.entity';
import {Level, LevelSchema} from '../level/entities/level.entity';
import {User, UserSchema} from '../user/entities/user.entity';
import {CleaningHistory, CleaningHistorySchema} from './entities/cleaning-history.entity';
import {RoomType, RoomTypeSchema} from "../room-type/entities/room-type.entity";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Room.name, schema: RoomSchema},
            {name: CleaningHistory.name, schema: CleaningHistorySchema},
            {name: User.name, schema: UserSchema},
            {name: RoomType.name, schema: RoomTypeSchema},
        ])
    ],
    controllers: [AdminRoomController],
    providers: [AdminRoomService]
})
export class AdminRoomModule {
}
