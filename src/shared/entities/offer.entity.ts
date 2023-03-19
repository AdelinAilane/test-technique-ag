import {MarketType} from "../enum/market-type.enum";

export class OfferEntity {
    public offerId: number;
    public createdAt: string;
    public updatedAt: string;
    constructor(
        public marketType: MarketType,
        public name: string,
        public timeBlocksIds: number[]
        ) {
    }

}
