package com.citi.stockrecommender.dao;

import com.citi.stockrecommender.entity.StockSector;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "stockSector",path = "stock-sector")
public interface StockSectorRepository extends JpaRepository<StockSector,Long> {
}
