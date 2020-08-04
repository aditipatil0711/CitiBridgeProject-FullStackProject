package com.citi.stockrecommender.controller;

import com.citi.stockrecommender.entity.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
@RequestMapping(path = "/api")
public class AuthenticationController
{

    //Controller for Authentication
    @GetMapping( path = "/basicauth")
    public Authentication basicauth(){
        return new Authentication("You are authenticated");
    }





}
