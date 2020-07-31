package com.citi.stockrecommender.controller;


import com.citi.stockrecommender.entity.Watchlist;
import com.citi.stockrecommender.service.WatchlistService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class WatchlistController {
    private WatchlistService watchlistService;

    public WatchlistController(WatchlistService theWatchlistService){
        watchlistService = theWatchlistService;
    }
    @PostMapping("/watchlist-details")
    private Watchlist addWatchlist(@RequestBody Watchlist theWatchlist){
        watchlistService.save(theWatchlist);
        return theWatchlist;
    }

    @GetMapping("/watchlist-details")
    private List<Watchlist> findAll(){
        return watchlistService.findAll();
    }

    @PutMapping("/watchlist-details")
    private Watchlist updateWatchlist(@RequestBody Watchlist theWatchlist){
        watchlistService.save(theWatchlist);
        return theWatchlist;

    }

    @DeleteMapping("/watchlist-details/{Id}")
    public String deleteWatchlist(@PathVariable Long Id){
        Watchlist tempWatchlist = watchlistService.findById(Id);

        if(tempWatchlist == null)
        {
            throw new RuntimeException("Watchlist not found" + Id);

        }
        watchlistService.deleteById(Id);
        return "Deleted watchlistId " + Id;
    }




}
