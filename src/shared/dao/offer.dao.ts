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
    console.log('insert', offer);
    const result = await this.offerRepository.save(offer);
    console.log('result', result);
    return result;
  }

  async addTimeBlockToOffer(
    offer: OfferEntity,
    timeBlock: TimeBlockEntity,
  ): Promise<OfferEntity> {
    console.log('addTimeBlockToOffer', offer, timeBlock);
    if (!offer.timeBlocks) {
      offer.timeBlocks = [];
    }
    offer.timeBlocks.push(timeBlock);
    const result = await this.offerRepository.save(offer);
    console.log('result', result);
    return result;
  }

  async listPaginatedByMarket(
    marketType: MarketType,
    page,
    limit,
  ): Promise<PaginatedQueryResult<OfferEntity>> {
    //TODO: use orm or db to get every offers. join on timeBlock and park to get informations
    // if frontend needs it
    // or if paginated
    // or if filter or sort on timeBlock and park's attributes
    //const queryBuilder = this.offerRepository.createQueryBuilder("offer");
    console.log('page, limit', page, limit);

    const pasq = new Pasq(page, limit);
    const skip = pasq.skip;
    console.log('typeof ', skip, typeof skip);
    const selectQb: SelectQueryBuilder<OfferEntity> = this.offerRepository
      .createQueryBuilder()
      .select('offer')
      .from(OfferEntity, 'offer')
      .leftJoinAndSelect('offer.timeBlocks', 'timeBlock')
      .leftJoinAndSelect('timeBlock.park', 'park')

      //.innerJoinAndSelect('park.timeBlocks', 'timeBlock')
      .where('offer.marketType = :marketType', { marketType })

      .skip(skip)
      .take(pasq.limit);

    const results = await selectQb.getMany();
    console.log('results', JSON.stringify(results));
    const count = await selectQb.getCount();

    console.log('results', results);
    return {
      total: count,
      currentPage: Number(pasq.page),
      items: results,
    };
  }
}
