import { MarketType } from '../enum/market-type.enum';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TimeBlockEntity } from './time-block.entity';

@Entity()
export class OfferEntity {
  @PrimaryGeneratedColumn()
  public offerId: number;
  @Column({ nullable: true, default: new Date().toISOString() })
  public createdAt: string;
  @Column({ nullable: true, default: new Date().toISOString() })
  public updatedAt: string;
  @Column()
  public marketType: MarketType;
  @Column()
  public name: string;

  @ManyToMany(() => TimeBlockEntity, (timeBlock) => timeBlock.offers)
  @JoinTable()
  timeBlocks: TimeBlockEntity[];

  //TODO: link offer to timeBlocks
  constructor(marketType: MarketType, name: string) {
    this.marketType = marketType;
    this.name = name;
  }
}
