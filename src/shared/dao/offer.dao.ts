import {Injectable} from "@nestjs/common";
import {ElecGenParkEntity} from "../entities/elec-generating-park.entity";
import {OfferEntity} from "../entities/offer.entity";
import {MarketType} from "../enum/market-type.enum";

@Injectable()
export class OfferDao {

    constructor() {

    }

    async getById(id: number): Promise<OfferEntity> {
        //TODO: call ORM or db
        return null;
    }

    async getAll(): Promise<OfferEntity[]> {
        //TODO: call ORM or db
        return [];
    }

    async insert(offer: OfferEntity): Promise<OfferEntity> {
        //TODO: call ORM or db
        return offer;
    }


    async listByMarket(marketType: MarketType): Promise<OfferEntity[]> {
        //TODO: use orm or db to get every offers. join on timeBlock and park to get informations
        // if frontend needs it
        // or if paginated
        // or if filter or sort on timeBlock and park's attributes

        return Promise.resolve([]);
    }
}
