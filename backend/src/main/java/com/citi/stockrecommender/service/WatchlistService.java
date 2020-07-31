package com.citi.stockrecommender.service;

import com.citi.stockrecommender.entity.Watchlist;

import java.util.List;

public interface WatchlistService {
    public List<Watchlist> findAll();
    public void save(Watchlist watchlist);
    public void deleteById(Long theId);
    public Watchlist findById(Long theId);

}
