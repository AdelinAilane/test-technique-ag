import { ElectricityOrigin } from '../enum/electricity-origin.enum';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TimeBlockEntity } from './time-block.entity';

@Entity()
export class ElecGenParkEntity {
  @PrimaryGeneratedColumn()
  public parkId: number;
  @Column({ nullable: true, default: new Date().toISOString() })
  public createdAt: string;
  @Column({ nullable: true, default: new Date().toISOString() })
  public updatedAt: string;
  @Column()
  public electricityOrigin: ElectricityOrigin;
  @Column()
  public name: string;

  //inverse side (timeBlock owns link of park)
  @OneToMany(() => TimeBlockEntity, (timeBlock) => timeBlock.park, {
    cascade: true,
  })
  @JoinColumn({ name: 'park_id' })

  timeBlocks: TimeBlockEntity[];

  constructor(electricityOrigin: ElectricityOrigin, name: string) {
    this.electricityOrigin = electricityOrigin;
    this.name = name;
  }
}
