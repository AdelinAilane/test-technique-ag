import {Injectable, Logger} from "@nestjs/common";
import {ParkCreationPayload} from "./park.payload";
import {ParkDao} from "../../shared/dao/park.dao";
import {SharedModule} from "../../shared/shared.module";
import {ElecGenParkEntity} from "../../shared/entities/elec-generating-park.entity";
import {MarketType} from "../../shared/enum/market-type.enum";

@Injectable()
export class ParkService {
    private readonly logger = new Logger(ParkService.name);

    constructor(private readonly parkDao: ParkDao) {
    }

    async createPark(payload: ParkCreationPayload): Promise<ElecGenParkEntity> {
        this.logger.log('createPark ' +JSON.stringify(payload));

        const entityToInsert = new ElecGenParkEntity(payload.electricityOrigin, payload.name)
        return this.parkDao.insert(entityToInsert);
    }

    async listParks(marketType: MarketType) {
        this.logger.log('listParks ' + marketType);
        return this.parkDao.listParkOnMarket(marketType);
    }
}
