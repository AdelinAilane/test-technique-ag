import { Module } from '@nestjs/common';
import {ParkDao} from "./dao/park.dao";
import {OfferDao} from "./dao/offer.dao";

@Module({
  imports: [],
  controllers: [],
  providers: [ParkDao, OfferDao],
  exports: [ParkDao, OfferDao]
})
export class SharedModule {}
