import {ElectricityOrigin} from "../enum/electricity-origin.enum";

export class ElecGenParkEntity {
    public parkId: number;
    public createdAt: string;
    public updatedAt: string;
    constructor(
        public electricityOrigin: ElectricityOrigin,
        public name: string,
        ) {
    }

}
