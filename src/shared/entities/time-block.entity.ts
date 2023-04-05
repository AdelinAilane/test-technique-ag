import { ElecGenParkEntity } from './elec-generating-park.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OfferEntity } from './offer.entity';

/**
 * lien offer -- timeBlock -- park: avec timeBlock.timeBlockId <-> offer.timeBlocksIds, timeBlock.parkId <-> park.parkId
 */
@Entity()
export class TimeBlockEntity {
  @PrimaryGeneratedColumn()
  public timeBlockId: number;
  @Column({ nullable: true, default: new Date().toISOString() })
  public createdAt: string;
  @Column({ nullable: true, default: new Date().toISOString() })
  public updatedAt: string;

  @ManyToOne(() => ElecGenParkEntity, (park) => park.timeBlocks)
  @JoinColumn({ name: 'park_id' })
  park: ElecGenParkEntity;

  @Column()
  public parkId: number;
  @Column()
  public start: string; //timestamp or ISO string
  @Column()
  public end: string; //timestamp or ISO string
  @Column()
  public power: number; // puissance(en MW) du park electrique sur ce bloc horaire,
  @Column()
  public lowestPrice: number; //prix plancher au dessous duquel on ne vendra pas

  @ManyToMany(() => OfferEntity, (offer) => offer.timeBlocks)
  offers: OfferEntity[];

  constructor(
    parkId: number,
    start: string, //timestamp or ISO string
    end: string, //timestamp or ISO string
    power: number, // puissance(en MW) du park electrique sur ce bloc horaire,
    lowestPrice: number, //prix plancher au dessous duquel on ne vendra pas
  ) {
    this.parkId = parkId;
    this.start = start;
    this.end = end;
    this.power = power;
    this.lowestPrice = lowestPrice;
  }
}
