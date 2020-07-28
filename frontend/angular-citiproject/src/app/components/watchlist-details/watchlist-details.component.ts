import { Component, OnInit } from '@angular/core';
import { WatchlistItem } from 'src/app/common/watchlist-item';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-watchlist-details',
  templateUrl: './watchlist-details.component.html',
  styleUrls: ['./watchlist-details.component.css']
})
export class WatchlistDetailsComponent implements OnInit {

  watchlistItems: WatchlistItem[] = [];
  totalPrice: number = 0;
  totalQuantity:number=0;


  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    this.listWatchlistDetails();
    
  }
  listWatchlistDetails() {
    
    //get a handle to the watchlist items
    this.watchlistItems = this.watchlistService.watchlistItems;

    //subscribe to the watchlist totalPrice
    this.watchlistService.totalPrice.subscribe(
      data => this.totalPrice = data
    );
    //subscribe to the watchlist totalQuantity
    this.watchlistService.totalQuantity.subscribe(
      data =>this.totalQuantity =data
    );

    //compute watchlist Total Price and Quantity
      this.watchlistService.computeWatchlistTotals();

  }

  incrementQuantity(theWatchlistItem: WatchlistItem){
    this.watchlistService.addToWatchlist(theWatchlistItem);

  }

  decrementQuantity(theWatchlistItem: WatchlistItem){
    this.watchlistService.decrementQuantity(theWatchlistItem);

  }

  remove(theWatchlistItem:WatchlistItem){
    this.watchlistService.remove(theWatchlistItem);
  }
}
