import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/common/stock';
import { StockService } from 'src/app/services/stock.service';
import { ActivatedRoute } from '@angular/router';
import { WatchlistService } from 'src/app/services/watchlist.service';
import { WatchlistItem } from 'src/app/common/watchlist-item';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  stock:Stock = new Stock();

  constructor(private stockService:StockService,
              private watchlistService:WatchlistService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.handleStockDetails();
    })
  }
  handleStockDetails() {
   
    //get the id pramaeter string and convert it into a number
    const theStockId: number = +this.route.snapshot.paramMap.get("id");

    this.stockService.getStock(theStockId).subscribe(
      data =>{
        this.stock = data;
      }
    )
  }

  addToWatchlist(){
    console.log(`Adding to Watchlist: ${this.stock.name}, ${this.stock.currentPrice}`);
    const theWatchlistItem = new WatchlistItem(this.stock);
    this.watchlistService.addToWatchlist(theWatchlistItem);
  }

}
