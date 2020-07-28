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
3)Once selection of seector, filter for Nifty Constituentswhich match it, from the filtered secuirities - market data should be used to take top 5 performing stocks on the basis of growth over last two weeks.
4)For these stocks, use live market data(like Yahoo Finance API) and as output display key statistics alongside the securities recommended.
5) User can select to save any of the recommended stocks with quantity and current market price. The Data should be persisted in DB so that the data is not lost after the user closes the browser.
6) When the user logs in again the user should be able to see the saved stocks and stats.
7) Use an appropriate DB( like Oracle) for persistance, Business logic on application server eitha Single Page Web Application connected with REST API.


Concepts Used:
1) DB Design:









