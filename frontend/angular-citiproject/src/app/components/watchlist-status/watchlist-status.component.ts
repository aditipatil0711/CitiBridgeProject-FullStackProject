import { Component, OnInit } from '@angular/core';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-watchlist-status',
  templateUrl: './watchlist-status.component.html',
  styleUrls: ['./watchlist-status.component.css']
})
export class WatchlistStatusComponent implements OnInit {

  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    this.updateWatchlistStatus();
  }
  updateWatchlistStatus() {
    //subscribe for events for watchlist service

    //subscribe to WatchListTotalPrice
    this.watchlistService.totalPrice.subscribe(
      data => this.totalPrice = data
    );
    //subscribe to the watchlist totalQuantity
      this.watchlistService.totalQuantity.subscribe(
        data => this.totalQuantity = data
      );
  }

}
