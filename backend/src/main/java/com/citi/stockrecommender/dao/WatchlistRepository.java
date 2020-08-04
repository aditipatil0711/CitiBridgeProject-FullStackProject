package com.citi.stockrecommender.dao;

import com.citi.stockrecommender.entity.Watchlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
@RepositoryRestResource(collectionResourceRel = "watchlistDetails",path = "watchlist-details")
public interface WatchlistRepository extends JpaRepository<Watchlist,Long> {

}
