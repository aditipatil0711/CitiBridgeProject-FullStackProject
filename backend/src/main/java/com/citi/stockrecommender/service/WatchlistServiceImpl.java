package com.citi.stockrecommender.service;

import com.citi.stockrecommender.dao.WatchlistRepository;
import com.citi.stockrecommender.entity.Watchlist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WatchlistServiceImpl implements WatchlistService{

    private WatchlistRepository watchlistRepository;

    @Autowired
    public WatchlistServiceImpl(WatchlistRepository theWatchlistRepository)
    {
        watchlistRepository = theWatchlistRepository;
    }

    @Override
    public List<Watchlist> findAll() {
        return watchlistRepository.findAll() ;
    }

    @Override
    public void save(Watchlist watchlist) {
        watchlistRepository.save(watchlist);
    }

    @Override
    public void deleteById(Long theId) {
        watchlistRepository.deleteById(theId);
    }

    @Override
    public Watchlist findById(Long theId) {
        Optional<Watchlist> result =  watchlistRepository.findById(theId);
        Watchlist theWatchlist = null;
        if(result.isPresent()){
            theWatchlist = result.get();
        }
        else{
            //we did not find item in watchlist
            throw new RuntimeException("Not found buddy");
        }
        return theWatchlist;

    }
}
