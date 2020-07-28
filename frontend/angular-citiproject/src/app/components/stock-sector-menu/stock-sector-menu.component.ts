import { Component, OnInit } from '@angular/core';
import { StockSector } from "src/app/common/stock-sector";
import { StockService } from 'src/app/services/stock.service';
@Component({
  selector: 'app-stock-sector-menu',
  templateUrl: './stock-sector-menu.component.html',
  styleUrls: ['./stock-sector-menu.component.css']
})
export class StockSectorMenuComponent implements OnInit {

  stockSectors: StockSector[];

  constructor(private stockService: StockService) { }

  ngOnInit(){
    this.listStockSectors();
  }
  listStockSectors() {
    this.stockService.getStockSectors().subscribe(
      data =>{
        console.log('Stock Sectors=' + JSON.stringify(data));
        this.stockSectors = data;
      }
    );
  }

}
