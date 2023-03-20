import {Injectable} from "@nestjs/common";
import {ElecGenParkEntity} from "../entities/elec-generating-park.entity";
import {OfferEntity} from "../entities/offer.entity";
import {MarketType} from "../enum/market-type.enum";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class OfferDao {

    constructor(@InjectRepository(OfferEntity) private offerRepository: Repository<OfferEntity>,
    ) {
    }

    async getById(id: number): Promise<OfferEntity> {
        return this.offerRepository.findOne({ where: { offerId: id }})
    }

    async getAll(): Promise<OfferEntity[]> {
        return this.offerRepository.find()
    }

    async insert(offer: OfferEntity): Promise<OfferEntity> {
        console.log('insert', offer);
        const result = await this.offerRepository.save(offer);
        console.log('result', result);
        return result;
    }


    async listByMarket(marketType: MarketType): Promise<OfferEntity[]> {
        //TODO: use orm or db to get every offers. join on timeBlock and park to get informations
        // if frontend needs it
        // or if paginated
        // or if filter or sort on timeBlock and park's attributes

        const results = await this.offerRepository.find();
        console.log('results', results);
        return results;
    }
}
