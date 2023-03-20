/**
 * lien offer -- timeBlock -- park: avec timeBlock.timeBlockId <-> offer.timeBlocksIds, timeBlock.parkId <-> park.parkId
 */
export class TimeBlockEntity {
    public timeBlockId: number;
    public createdAt: string;
    public updatedAt: string;

    constructor(
        public parkId: number,
        public start: string, //timestamp or ISO string
        public end: string, //timestamp or ISO string
        public power: number, // puissance(en MW) du park electrique sur ce bloc horaire,
        public lowestPrice: number //prix plancher au dessous duquel on ne vendra pas
    ) {
    }
}
