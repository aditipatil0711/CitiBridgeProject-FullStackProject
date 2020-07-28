import { Stock } from './stock';


export class WatchlistItem {
    id:string;
    stockName:string;
    savedPrice:number;
    quantity:number;
   
    constructor(stock: Stock){
        this.id = stock.id;
        this.stockName= stock.name;
        this.savedPrice = stock.currentPrice;
        this.quantity = 1;

    }
    

}
