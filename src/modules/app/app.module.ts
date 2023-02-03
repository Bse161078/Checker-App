import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { jwtConfig } from '../../config/jwt.config';
import dbConfig from '../../config/mongoose.config';
import { AuthModule } from '../auth/auth.module';
import { BedModule } from '../bed/bed.module';
import { BathroomModule } from '../bathroom/bathroom.module';
import { CheckListModule } from '../check-list/check-list.module';
import { CleanerModule } from '../cleaner/cleaner.module';
import { CurtainsModule } from '../curtains/curtains.module';
import { FloorModule } from '../floor/floor.module';
import { LevelModule } from '../level/level.module';
import { AdminRoomModule } from '../room/room.module';
import { ShelvesModule } from '../shelves/shelves.module';
import { UserModule } from '../user/user.module';
import { CheckerModule } from '../checker/checker.module';
import { RoomTypeModule } from '../room-type/room-type.module';
import { BillsModule } from '../bills/bills.module';
import { HotelModule } from '../hotel/hotel.module';
import { CompanyModule } from '../company/company.module';
import { MaterialListModule } from '../material-list/material-list.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(process.cwd(), ".env." + process.env.NODE_ENV)
    }),
    MongooseModule.forRoot(dbConfig()),
    JwtModule.register(jwtConfig()),
    AuthModule,
    UserModule,
    HotelModule,
    CompanyModule,
    RoomTypeModule,
    CleanerModule,
    BillsModule,
    CheckerModule,
    LevelModule,
    AdminRoomModule,
    CheckListModule,
    FloorModule,
    CurtainsModule,
    ShelvesModule,
    BedModule,
    BathroomModule,
    MaterialListModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
