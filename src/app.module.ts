import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SharedModule} from "./shared/shared.module";
import {ParkModule} from "./features/park/park.module";
import {OfferModule} from "./features/offer/offer.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ElecGenParkEntity} from "./shared/entities/elec-generating-park.entity";
import {OfferEntity} from "./shared/entities/offer.entity";

@Module({
  imports: [SharedModule, ParkModule, OfferModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'ag_db',
      password: 'ag_db_pwd',
      database: 'ag_db',
      entities: [ElecGenParkEntity, OfferEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
