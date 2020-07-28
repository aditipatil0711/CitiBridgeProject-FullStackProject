package com.citi.stockrecommender.entity;


import javax.persistence.*;

@Entity
@Table(name = "watchlist_details")
public class Watchlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "save_id")
    private Long Id;

    @Column(name = "stock_name")
    private String   stockName;

    @Column(name = "qty")
    private int quantity;

    @Column(name = "save_price")
    private double currentPrice;


    @Column(name = "total_price")
    private double totalPrice;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getStockName() {
        return stockName;
    }

    public void setStockName(String stockName) {
        this.stockName = stockName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getSavedPrice() {
        return currentPrice;
    }

    public void setSavedPrice(double savedPrice) {
        this.currentPrice = savedPrice;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
}
