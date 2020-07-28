import { Injectable } from '@angular/core';
import { WatchlistItem } from '../common/watchlist-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  watchlistItems: WatchlistItem[] = [];

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToWatchlist(theWatchlistItem:WatchlistItem){

    //check if we already have the stock in our watchlist
    let alreadyExistsInWatchlist:boolean = false;
    let existingWatchlistStock: WatchlistItem = undefined;

    if(this.watchlistItems.length > 0){
    //find the item in the cart based on stockId
      
      existingWatchlistStock = this.watchlistItems.find(tempWatchlistItem => tempWatchlistItem.id === theWatchlistItem.id)
      
    //check if we found it
    alreadyExistsInWatchlist = (existingWatchlistStock != undefined);
  }

  if(alreadyExistsInWatchlist){
    existingWatchlistStock.quantity++;

  }
  else{
    this.watchlistItems.push(theWatchlistItem);

  }
  //compute cart total price and total quantity
  this.computeWatchlistTotals();
  
  }

    computeWatchlistTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for(let currentWatchlistItem of this.watchlistItems){
      totalPriceValue += currentWatchlistItem.quantity * currentWatchlistItem.currentPrice;
      totalQuantityValue += currentWatchlistItem.quantity;
    }

    //publish the new values .... all subscroibers will recieve the new data
      this.totalPrice.next(totalPriceValue);
      this.totalQuantity.next(totalQuantityValue);

      //log cart data just for debugging purposes
      this.logWatchlistData(totalPriceValue,totalQuantityValue);

  
  }
  logWatchlistData(totalPriceValue: number, totalQuantityValue: number) {
    console.log("Contents of the Watchlist");
    for(let tempWatchlistItem of this.watchlistItems){
      const subTotalPrice = tempWatchlistItem.quantity *tempWatchlistItem.currentPrice;
      console.log(`name: ${tempWatchlistItem.name},quantity: ${tempWatchlistItem.quantity}, currentPrice = ${tempWatchlistItem}, subTotalPrice: ${subTotalPrice}`);
    }

    console.log(`totalPrice:${totalPriceValue.toFixed(2)}, totalQuantity:${totalQuantityValue}`);
    console.log("----------------");

    
  }

  decrementQuantity(theWatchlistItem: WatchlistItem) {
    theWatchlistItem.quantity--;
    if(theWatchlistItem.quantity === 0){
      this.remove(theWatchlistItem);
    }
    else{
      this.computeWatchlistTotals();
    }

  }
  remove(theWatchlistItem: WatchlistItem) {
      // get index of item in array
      const itemIndex = this.watchlistItems.findIndex(tempWatchlistItem => tempWatchlistItem.id === theWatchlistItem.id);
      //if found remove the item from the array
      if(itemIndex > -1){
        this.watchlistItems.splice(itemIndex,1);
        this.computeWatchlistTotals();
      }
  }
}
