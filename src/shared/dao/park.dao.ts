import {Injectable} from "@nestjs/common";
import {ElecGenParkEntity} from "../entities/elec-generating-park.entity";

@Injectable()
export class ParkDao {

    constructor() {

    }

    getById(id: number): ElecGenParkEntity {
        //TODO: call ORM or db
        return null;
    }

    getAll(): ElecGenParkEntity[] {
        //TODO: call ORM or db
        return [];
    }

    insert(elecGenPark: ElecGenParkEntity): ElecGenParkEntity {
        //TODO: call ORM or db
        return elecGenPark;
    }


}
