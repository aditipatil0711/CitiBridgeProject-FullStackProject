package com.citi.stockrecommender.dao;

import com.citi.stockrecommender.entity.Stock;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
public interface StockRepository extends JpaRepository<Stock, Long> {
    //JPA Repository for easy Query creation bettween frontend and Backend
    Page<Stock> findBySectorId(@RequestParam("id") Long id, Pageable pageable);
    Page<Stock> findByNameContaining(@RequestParam("name") String name,Pageable pageable);
}


