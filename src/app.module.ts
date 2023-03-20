import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SharedModule} from "./shared/shared.module";
import {ParkModule} from "./features/park/park.module";
import {OfferModule} from "./features/offer/offer.module";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [SharedModule, ParkModule, OfferModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3306,
      username: 'ag_db',
      password: 'ag_db_pwd',
      database: 'ag_db',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
