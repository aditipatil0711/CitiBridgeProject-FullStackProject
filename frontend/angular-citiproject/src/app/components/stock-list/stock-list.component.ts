import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';
import { Stock } from 'src/app/common/stock';
import { ActivatedRoute } from '@angular/router';
import { WatchlistItem} from 'src/app/common/watchlist-item';
import { WatchlistService} from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list-table.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stocks: Stock[] = [];
  currentSectorId: number = 1;
  previousSectorId: number = 1;
  currentSectorName: string;
  searchMode: boolean = false;


  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  previousKeyWord:string = null;

  constructor(private stockService: StockService,
              private watchlistService: WatchlistService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listStocks();
    });
  }

  listStocks() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchStocks();
    }
    else {
      this.handleListStocks();
    }



  }
  handleSearchStocks() {

    const theKeyWord: string = this.route.snapshot.paramMap.get('keyword');

    //if we have a different keyword than previous
    //then set Pagenumber to 1

    if (this.previousKeyWord != theKeyWord){
      this.thePageNumber=1
    }
    this.previousKeyWord = theKeyWord;

    console.log(`keyword=${theKeyWord},thePageNumber=${this.thePageNumber}`);


    this.stockService.searchStocksPaginate(this.thePageNumber-1,
                                            this.thePageSize,
                                            theKeyWord).subscribe(this.processResult());

  }

  handleListStocks() {

    const hasSectorId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasSectorId) {
      this.currentSectorId = +this.route.snapshot.paramMap.get('id');
      this.currentSectorName = this.route.snapshot.paramMap.get('name');
    }
    else {
      //not available default to sector no 1
      this.currentSectorId = 1;
      this.currentSectorName = 'AUTOMOBILE'
    }

    //
    //Check if we have a different category than previous
    //Note: Angular will reuse a component if it is currently being viewed
    //

    //if we have a different sector id than previous
    //then we set thePageNumber back to 1

    if (this.previousSectorId != this.currentSectorId) {
      this.thePageNumber = 1;

    }
    this.previousSectorId = this.currentSectorId;

    console.log(`currentSectorId=${this.currentSectorId}, thePageNumber=${this.thePageNumber}`);



    //get stocks list
    this.stockService.getStockListPaginate(this.thePageNumber - 1,
      this.thePageSize,
      this.currentSectorId)
      .subscribe(this.processResult());
  }
  processResult(){
    return data =>{
      this.stocks = data._embedded.stocks;
      this.thePageNumber = data.page.number +1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.theTotalElements
    };
  }

  updatePageSize(pageSize:number){
    this.thePageSize = pageSize;
    this.thePageNumber = 1;
    this.listStocks();

  }

  addToWatchlist(theStock:Stock){
    console.log(`Adding to Watchlist: ${theStock.name},${theStock.currentPrice}`);
    

    const theWatchlistItem = new WatchlistItem(theStock);

    this.watchlistService.addToWatchlist(theWatchlistItem);


    
  }

}
