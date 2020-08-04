import { Stock } from './stock';


export class WatchlistItem {
    //All variables for access into Watchlist Table
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
