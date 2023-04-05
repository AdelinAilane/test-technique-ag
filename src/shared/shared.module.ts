import { Module } from '@nestjs/common';
import { ParkDao } from './dao/park.dao';
import { OfferDao } from './dao/offer.dao';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfferEntity } from './entities/offer.entity';
import { ElecGenParkEntity } from './entities/elec-generating-park.entity';
import { TimeBlockDao } from './dao/time-block.dao';
import { TimeBlockEntity } from './entities/time-block.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OfferEntity, ElecGenParkEntity, TimeBlockEntity]),
  ],
  controllers: [],
  providers: [ParkDao, OfferDao, TimeBlockDao],
  exports: [ParkDao, OfferDao, TimeBlockDao],
})
export class SharedModule {}
