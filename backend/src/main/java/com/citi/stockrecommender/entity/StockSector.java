package com.citi.stockrecommender.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "stock_sector")
@Getter
@Setter
public class StockSector {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "sector_name")
    private String sectorName;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "sector")
    private Set<Stock> stocks;

}
