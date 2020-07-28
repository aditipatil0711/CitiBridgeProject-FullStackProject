package com.citi.stockrecommender.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "stock")
@Data
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long Id;

    @ManyToOne
    @JoinColumn(name = "sector_id",nullable = false)
    private  StockSector sector;

    @Column(name = "sku")
    private String sku;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "current_price")
    private double currentPrice;

    @Column(name = "per_change")
    private double perChange;

    @Column(name = "active")
    private boolean active;

    @Column(name = "date_created")
    @CreationTimestamp
    private Date dateCreated;

    ///@ManyToMany(cascade = CascadeType.ALL,mappedBy = "stock")
    //private Set<User> users;


    public Long getId() {
        return Id;
    }
}
