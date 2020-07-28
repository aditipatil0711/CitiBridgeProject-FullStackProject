import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../common/stock';
import { map } from 'rxjs/operators';
import { StockSector } from '../common/stock-sector';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseUrl = 'http://localhost:8080/api/stocks';
  private sectorUrl = 'http://localhost:8080/api/stock-sector';
  constructor(private httpClient: HttpClient) { }

  getStock(theStockId: number): Observable<Stock> {
    //need to build Url base on Stock Id
    const stockUrl = `${this.baseUrl}/${theStockId}`;

    return this.httpClient.get<Stock>(stockUrl);
  }

  getStockListPaginate(thePage: number,
    thePageSize: number,
    theSectorId: number): Observable<GetResponseStocks> {

    //need to build URL based on sector ID
    const searchUrl = `${this.baseUrl}/search/findBySectorId?id=${theSectorId}`
      + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseStocks>(searchUrl);

  }

  getStockList(theSectorId: number): Observable<Stock[]> {

    //need to build URL based on sector ID
    const searchUrl = `${this.baseUrl}/search/findBySectorId?id=${theSectorId}`;

    return this.getStocks(searchUrl);

  }


  searchStocks(theKeyWord: string): Observable<Stock[]> {
    //need to build URL based on keyword
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyWord}`;

    return this.getStocks(searchUrl);

  }

  searchStocksPaginate(thePage: number,
                    thePageSize: number,
                    theKeyWord: string): Observable<GetResponseStocks> {

    //need to build URL based on sector ID
        const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyWord}`
                        + `&page=${thePage}&size=${thePageSize}`;

        return this.httpClient.get<GetResponseStocks>(searchUrl);

  }

  private getStocks(searchUrl: string): Observable<Stock[]> {
    return this.httpClient.get<GetResponseStocks>(searchUrl).pipe(
      map(response => response._embedded.stocks)
    );
  }

  getStockSectors(): Observable<StockSector[]> {
    return this.httpClient.get<GetResponseStockSector>(this.sectorUrl).pipe(
      map(response => response._embedded.stockSector)
    );
  }


}

interface GetResponseStocks {
  _embedded: {
    stocks: Stock[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}


interface GetResponseStockSector {
  _embedded: {
    stockSector: StockSector[];
  }
}
