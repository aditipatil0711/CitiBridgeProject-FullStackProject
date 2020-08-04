# CitiBridgeProject-FullStackProject

Technologies used:
1) Springboot for backend
2) Angular for Frontend
3) MySQL workbench for Database

Dependencies used
1) JPARepository for DAO creation 
2) Hibernate
3) MySQL-Connector
4) Lombok for Getters and Setter creation

Functionalities:
1) Sector based search
2) Keyword based Search
3) Addition to Watchlist
4) Display of pre-saved stocks
5) Removal of Stocks
6) Login

Note: In order to get live data from an External API (like Yahoo finance API), the APIs available were not free and the parameters required were not possible to be retried. So that functionality of Dynamism was omitted after discussion with mentor.

Problem Statement:
You required to construct a trade recommendation system based on user-selected sectors(from Nifty Stocks).

1) User logs in to the system with a username and password(No need of a registration module- rather you can have  apredefined set of users in Database against which authentication is done).

2) Once logged in, user selects a market sector(Automotive, financial, Health-Care, Technology etc.) in order to get suggestions in securities.

3) Once selection of seector, filter for Nifty Constituentswhich match it, from the filtered secuirities - market data should be used to take top 5 performing stocks on the basis of growth over last two weeks.

4) For these stocks, use live market data(like Yahoo Finance API) and as output display key statistics alongside the securities recommended.

5) User can select to save any of the recommended stocks with quantity and current market price. The Data should be persisted in DB so that the data is not lost after the user closes the browser.

6) When the user logs in again the user should be able to see the saved stocks and stats.

7) Use an appropriate DB( like Oracle) for persistance, Business logic on application server eitha Single Page Web Application connected with REST API.


Concepts Used:
1) DB Design: EER Diagram: Refer link of Image from github Repository:
https://github.com/aditipatil0711/CitiBridgeProject-FullStackProject/blob/master/DB%20Design%20EEr.PNG

2) JDBC Connection with Springboot :
JDBC connection pooling is a mechanism that manages multiple database connection requests. In other words, it facilitates connection reuse, a memory cache of database connections, called a connection pool. A connection pooling module maintains it as a layer on top of any standard JDBC driver product.
The default connection pool in Spring Boot 2 is HikariCP. It provides enterprise-ready features and better performance. HikariCP is a JDBC DataSource implementation that provides a connection pooling mechanism.

3) Hibernate and JPA integration:
JPA allows to map application classes to tables in database.
    a) Entity Manager - Once the mappings are defined, entity manager can manage your entities. Entity Manager handles all interactions with the database
    b)  JPQL (Java Persistence Query Language) - Provides ways to write queries to execute searches against entities. Important thing to understand is the these are different from SQL queries. JPQL queries already understand the mappings that are defined between entities. We can add additional conditions as needed.
    c) Criteria API defines a Java based API to execute searches against databases.

4) Cross Origin:
Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. hence for communication of Springboot and Angular @CrossOrigin annotation is required

5) JDBC Driver:
A JDBC driver is a set of Java classes that implement the JDBC interfaces, targeting a specific database. The JDBC interfaces come with standard Java, but the implementation of these interfaces is specific to the database you need to connect to. Such an implementation is called a JDBC driver. For this MySQL JDBC Driver Maven Dependency is used.


Made By Group 13: 
1) Aditi Prabhakar Patil
2) Aarya Mulaokar
3) Pooja Jundhare
4) Ruchi Bharadia
5) Sneha Basargaon

Mentor:
Jayachandra Pendyala









