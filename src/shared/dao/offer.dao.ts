import { Injectable } from '@nestjs/common';
import { ElecGenParkEntity } from '../entities/elec-generating-park.entity';
import { OfferEntity } from '../entities/offer.entity';
import { MarketType } from '../enum/market-type.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { Pasq } from '../query/pasq';
import { TimeBlockEntity } from '../entities/time-block.entity';
import { PaginatedQueryResult } from '../model/paginatedQueryResult';

@Injectable()
export class OfferDao {
  constructor(
    @InjectRepository(OfferEntity)
    private offerRepository: Repository<OfferEntity>,
  ) {}

  async getById(id: number): Promise<OfferEntity> {
    return this.offerRepository.findOne({
      relations: { timeBlocks: true },
      where: { offerId: id },
    });
  }

  async getAll(): Promise<OfferEntity[]> {
    return this.offerRepository.find();
  }

  async insert(offer: OfferEntity): Promise<OfferEntity> {
    const result = await this.offerRepository.save(offer);
    return result;
  }

  async addTimeBlockToOffer(
    offer: OfferEntity,
    timeBlock: TimeBlockEntity,
  ): Promise<OfferEntity> {
    if (!offer.timeBlocks) {
      offer.timeBlocks = [];
    }
    offer.timeBlocks.push(timeBlock);
    const result = await this.offerRepository.save(offer);
    return result;
  }

  async listPaginatedByMarket(
    marketType: MarketType,
    page,
    limit,
  ): Promise<PaginatedQueryResult<OfferEntity>> {

    const pasq = new Pasq(page, limit);
    const skip = pasq.skip;
    const selectQb: SelectQueryBuilder<OfferEntity> = this.offerRepository
      .createQueryBuilder()
      .select('offer')
      .from(OfferEntity, 'offer')
      .leftJoinAndSelect('offer.timeBlocks', 'timeBlock')
      .leftJoinAndSelect('timeBlock.park', 'park')
      .where('offer.marketType = :marketType', { marketType })
      .skip(skip)
      .take(pasq.limit);

    const results = await selectQb.getMany();
    const count = await selectQb.getCount();

    return {
      total: count,
      currentPage: Number(pasq.page),
      items: results,
    };
  }
}
