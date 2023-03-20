import {MarketType} from "../enum/market-type.enum";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class OfferEntity {
    @PrimaryGeneratedColumn()
    public offerId: number;
    @Column()
    public createdAt: string;
    @Column()
    public updatedAt: string;
    constructor(
        public marketType: MarketType,
        public name: string,
        public timeBlocksIds: number[]
        ) {
    }

}
