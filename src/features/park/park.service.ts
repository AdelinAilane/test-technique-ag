import {Injectable} from "@nestjs/common";
import {ParkCreationPayload} from "./park.payload";
import {ParkDao} from "../../shared/dao/park.dao";
import {SharedModule} from "../../shared/shared.module";
import {ElecGenParkEntity} from "../../shared/entities/elec-generating-park.entity";

@Injectable()
export class ParkService {
    constructor(private readonly parkDao: ParkDao) {
    }

    async createPark(payload: ParkCreationPayload): Promise<ElecGenParkEntity> {
        const entityToInsert = new ElecGenParkEntity(payload.electricityOrigin, payload.name)
        return this.parkDao.insert(entityToInsert);
    }

}
