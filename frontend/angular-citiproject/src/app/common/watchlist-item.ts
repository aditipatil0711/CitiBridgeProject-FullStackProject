import { Stock } from './stock';


export class WatchlistItem {
    id:string;
    name:string;
    currentPrice:number;
    

    quantity:number;

    constructor(stock: Stock){
        this.id = stock.id;
        this.name= stock.name;
        this.currentPrice = stock.currentPrice;
        this.quantity = 1;

    }
    

}
