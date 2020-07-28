package com.citi.stockrecommender.entity;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long Id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name ="role")
    private  String roles;

    @Column(name = "enabled")
    private String active;

    //@ManyToMany(cascade = CascadeType.ALL,mappedBy = "user")
    //private Set<Stock> savedStocks;

    public User() {
    }

    public Long getId() {
        return Id;
    }
}
