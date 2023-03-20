import {Injectable} from "@nestjs/common";
import {ElecGenParkEntity} from "../entities/elec-generating-park.entity";
import {MarketType} from "../enum/market-type.enum";
import {InjectRepository} from "@nestjs/typeorm";
import {OfferEntity} from "../entities/offer.entity";
import {Repository} from "typeorm";

@Injectable()
export class ParkDao {

    constructor(@InjectRepository(ElecGenParkEntity) private elecGenParkEntityRepository: Repository<ElecGenParkEntity>) {
    }

    async getById(id: number): Promise<ElecGenParkEntity> {
        return this.elecGenParkEntityRepository.findOne({where: { parkId: id }});
    }

    async getAll(): Promise<ElecGenParkEntity[]> {
        return this.elecGenParkEntityRepository.find();
    }

    async insert(elecGenPark: ElecGenParkEntity): Promise<ElecGenParkEntity> {
        return this.elecGenParkEntityRepository.save(elecGenPark);
    }

    async listParkOnMarket(marketType: MarketType): Promise<ElecGenParkEntity[]>{
        //TODO: park left join on blocks left join on offers, where offer.marketType === marketType
        return this.elecGenParkEntityRepository.find();
    }
}
