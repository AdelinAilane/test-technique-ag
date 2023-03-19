import {Injectable} from "@nestjs/common";
import {OfferCreationPayload} from "./offer.payload";
import {OfferEntity} from "../../shared/entities/offer.entity";
import {OfferDao} from "../../shared/dao/offer.dao";

@Injectable()
export class OfferService {
    constructor(private readonly offerDao: OfferDao) {
    }

    async createOffer(payload: OfferCreationPayload): Promise<OfferEntity> {
        const entityToInsert = new OfferEntity(payload.marketType, payload.name, [])
        return this.offerDao.insert(entityToInsert);
    }

}
