import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import {HttpClientModule} from '@angular/common/http';
import {StockService} from './services/stock.service';
import {Routes,RouterModule} from '@angular/router';
import { StockSectorMenuComponent } from './components/stock-sector-menu/stock-sector-menu.component';
import { SearchComponent } from './components/search/search.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WatchlistDetailsComponent } from './components/watchlist-details/watchlist-details.component';
import { WatchlistStatusComponent } from './components/watchlist-status/watchlist-status.component';


const routes: Routes = [
      {path:'watchlist-details', component:WatchlistDetailsComponent},
      {path:'stocks/:id', component:StockDetailsComponent},
      {path:'search/:keyword', component:StockListComponent},
      {path: 'sector/:id/:name',component:StockListComponent},
      {path: 'sector',component:StockListComponent},
      {path: 'stocks',component:StockListComponent},
      {path: '',redirectTo:'/stocks',pathMatch :'full'},
      {path: '**',redirectTo:'/stocks',pathMatch :'full'},
    
];
@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    StockSectorMenuComponent,
    SearchComponent,
    StockDetailsComponent,
    WatchlistDetailsComponent,
    WatchlistStatusComponent,
  
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
