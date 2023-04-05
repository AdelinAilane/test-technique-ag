import { Injectable } from '@nestjs/common';
import { ElecGenParkEntity } from '../entities/elec-generating-park.entity';
import { MarketType } from '../enum/market-type.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { OfferEntity } from '../entities/offer.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { Pasq } from '../query/pasq';
import { PaginatedQueryResult } from '../model/paginatedQueryResult';
import { exist } from 'joi';
import { ElectricityOrigin } from '../enum/electricity-origin.enum';

@Injectable()
export class ParkDao {
  constructor(
    @InjectRepository(ElecGenParkEntity)
    private elecGenParkEntityRepository: Repository<ElecGenParkEntity>,
  ) {}

  async getById(id: number): Promise<ElecGenParkEntity> {
    return this.elecGenParkEntityRepository.findOne({ where: { parkId: id } });
  }

  async getAll(): Promise<ElecGenParkEntity[]> {
    return this.elecGenParkEntityRepository.find();
  }

  async insert(elecGenPark: ElecGenParkEntity): Promise<ElecGenParkEntity> {
    return this.elecGenParkEntityRepository.save(elecGenPark);
  }

  async listParkFromOrigin(
    electricityOrigin: ElectricityOrigin,
    page: number,
    limit: number,
  ): Promise<PaginatedQueryResult<ElecGenParkEntity>> {
    const pasq: Pasq = new Pasq(page, limit);

    const selectQb: SelectQueryBuilder<ElecGenParkEntity> =
      this.elecGenParkEntityRepository
        .createQueryBuilder()
        .select('park')
        .from(ElecGenParkEntity, 'park')
        .leftJoinAndSelect('park.timeBlocks', 'timeBlock')
        .leftJoinAndSelect('timeBlock.offers', 'offer')
        .where('park.electricityOrigin= :electricityOrigin', {
          electricityOrigin,
        })
        .skip(pasq.skip)
        .take(pasq.limit);

    const [results, count] = await selectQb.getManyAndCount();
    console.log('count', count, 'results', JSON.stringify(results));
    return {
      items: results,
      currentPage: Number(page),
      total: Number(count),
    };
  }
}
