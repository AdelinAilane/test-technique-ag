import { Module } from '@nestjs/common';
import {ParkDao} from "./dao/park.dao";
import {OfferDao} from "./dao/offer.dao";
import {TypeOrmModule} from "@nestjs/typeorm";
import {OfferEntity} from "./entities/offer.entity";
import {ElecGenParkEntity} from "./entities/elec-generating-park.entity";

@Module({
  imports: [
    /*
      TypeOrmModule.forFeature(
        [OfferEntity, ElecGenParkEntity],
    ),
      */
    TypeOrmModule.forFeature([OfferEntity, ElecGenParkEntity])
  ],
  controllers: [],
  providers: [ParkDao, OfferDao],
  exports: [ParkDao, OfferDao]
})
export class SharedModule {}
