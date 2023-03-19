import {Injectable, Logger} from "@nestjs/common";
import {OfferCreationPayload} from "./offer.payload";
import {OfferEntity} from "../../shared/entities/offer.entity";
import {OfferDao} from "../../shared/dao/offer.dao";
import {MarketType} from "../../shared/enum/market-type.enum";

@Injectable()
export class OfferService {
    private readonly logger = new Logger(OfferService.name);

    constructor(private readonly offerDao: OfferDao) {
    }

    async createOffer(payload: OfferCreationPayload): Promise<OfferEntity> {
        this.logger.log('createOffer ' +JSON.stringify(payload));
        const entityToInsert = new OfferEntity(payload.marketType, payload.name, [])
        return this.offerDao.insert(entityToInsert);
    }

    async listOffers(marketType: MarketType) {
        this.logger.log('listOffers ' +marketType);
        return this.offerDao.listByMarket(marketType);
    }
}
