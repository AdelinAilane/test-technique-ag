import {ElectricityOrigin} from "../enum/electricity-origin.enum";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


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

    constructor(
        electricityOrigin: ElectricityOrigin,
        name: string,
    ) {
        this.electricityOrigin = electricityOrigin;
        this.name = name;
    }
}
