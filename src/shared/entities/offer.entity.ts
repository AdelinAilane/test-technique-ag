import {MarketType} from "../enum/market-type.enum";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class OfferEntity {
    @PrimaryGeneratedColumn()
    public offerId: number;
    @Column({ nullable: true, default: new Date().toISOString()})
    public createdAt: string;
    @Column({ nullable: true, default: new Date().toISOString()})
    public updatedAt: string;
    @Column()
    public marketType: MarketType;
    @Column()
    public name: string;
   // @Column()
   // public timeBlocksIds: number[];

    //TODO: link offer to timeBlocks
    constructor(
        marketType: MarketType,
        name: string,
        timeBlocksIds: number[]
        ) {
        this.marketType = marketType;
        this.name = name;
        // this.timeBlocksIds = timeBlocksIds;
    }

}
