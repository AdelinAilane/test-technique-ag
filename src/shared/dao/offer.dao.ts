import {Injectable} from "@nestjs/common";
import {ElecGenParkEntity} from "../entities/elec-generating-park.entity";
import {OfferEntity} from "../entities/offer.entity";

@Injectable()
export class OfferDao {

    constructor() {

    }

    getById(id: number): OfferEntity {
        //TODO: call ORM or db
        return null;
    }

    getAll(): OfferEntity[] {
        //TODO: call ORM or db
        return [];
    }

    insert(offer: OfferEntity): OfferEntity {
        //TODO: call ORM or db
        return offer;
    }


}
