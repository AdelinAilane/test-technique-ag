import {Injectable} from "@nestjs/common";
import {ElecGenParkEntity} from "../entities/elec-generating-park.entity";
import {MarketType} from "../enum/market-type.enum";

@Injectable()
export class ParkDao {

    constructor() {

    }

    async getById(id: number): Promise<ElecGenParkEntity> {
        //TODO: call ORM or db
        return null;
    }

    async getAll(): Promise<ElecGenParkEntity[]> {
        //TODO: call ORM or db
        return [];
    }

    async insert(elecGenPark: ElecGenParkEntity): Promise<ElecGenParkEntity> {
        //TODO: call ORM or db
        return elecGenPark;
    }

    async listParkOnMarket(marketType: MarketType): Promise<ElecGenParkEntity[]>{
        //TODO: park left join on blocks left join on offers, where offer.marketType === marketType
        return Promise.resolve([]);
    }
}
