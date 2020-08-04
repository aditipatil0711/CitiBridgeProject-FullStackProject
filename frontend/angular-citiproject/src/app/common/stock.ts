export class Stock {
    //All values in Stock Table for access
    id:string;
    sku:string;
    name: string;
    description:string;
    currentPrice: number;
    perChange: number;
    active:boolean;
    qty:number;
    dateCreated: Date;
    lastUpdate: Date;
    sectorId: number;
}
