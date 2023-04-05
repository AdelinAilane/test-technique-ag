import { Injectable, Logger } from '@nestjs/common';
import { OfferCreationPayload } from './offer.payload';
import { OfferEntity } from '../../shared/entities/offer.entity';
import { OfferDao } from '../../shared/dao/offer.dao';
import { MarketType } from '../../shared/enum/market-type.enum';
import { TimeBlockDao } from '../../shared/dao/time-block.dao';
import { PaginatedQueryResult } from '../../shared/model/paginatedQueryResult';

@Injectable()
export class OfferService {
  private readonly logger = new Logger(OfferService.name);

  constructor(
    private readonly offerDao: OfferDao,
    private readonly timeBlockDao: TimeBlockDao,
  ) {}

  async createOffer(payload: OfferCreationPayload): Promise<OfferEntity> {
    this.logger.log('createOffer ' + JSON.stringify(payload));
    const entityToInsert = new OfferEntity(payload.marketType, payload.name);
    return this.offerDao.insert(entityToInsert);
  }

  async listPaginatedOffers(
    marketType: MarketType,
    page: number,
    limit: number,
  ): Promise<PaginatedQueryResult<OfferEntity>> {
    this.logger.log('listOffers ' + marketType);
    return this.offerDao.listPaginatedByMarket(marketType, page, limit);
  }

  async addTimeBlockToOffer(
    offerId: number,
    timeBlockId: number,
  ): Promise<OfferEntity> {
    const offer = await this.offerDao.getById(offerId);
    const timeBlock = await this.timeBlockDao.getById(timeBlockId);
    return this.offerDao.addTimeBlockToOffer(offer, timeBlock);
  }
}
