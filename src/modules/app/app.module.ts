import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { jwtConfig } from 'src/config/jwt.config';
import dbConfig from 'src/config/mongoose.config';
import { AuthModule } from '../auth/auth.module';
import { BedModule } from '../bed/bed.module';
import { BathroomModule } from '../bathroom/bathroom.module';
import { AdminCheckListModule } from '../check-list/check-list.module';
import { CleanerModule } from '../cleaner/cleaner.module';
import { CurtainsModule } from '../curtains/curtains.module';
import { FloorModule } from '../floor/floor.module';
import { LevelModule } from '../level/level.module';
import { AdminRoomModule } from '../room/room.module';
import { ShelvesModule } from '../shelves/shelves.module';
import { UserModule } from '../user/user.module';

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
    CleanerModule,
    LevelModule,
    AdminRoomModule,
    AdminCheckListModule,
    FloorModule,
    CurtainsModule,
    ShelvesModule,
    BedModule,
    BathroomModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
