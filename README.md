# Welcome to my portfolio project
**Deploy at:** [https://quanblue.herokuapp.com/](https://www.jaythesia.me)

## Technology stack
**Tech stack:** MERN (**M**ongoDB - **E**xpressJS - **R**eactJS - **N**odeJS)

## Installation  
- Clone project 
```sh
git clone https://github.com/QuanBlue/portfolio.git
```

- Install npm on Client and Server
```sh
cd client
npm install
cd ..
npm install
```

- Config `.env` file
  - Create `.env` file in `./portfolio`
  - Update `.env` file with (Guess account _ Read only)  
  `DB_CONNECT = mongodb+srv://guess:0aGRADHax24DXzCL@cluster0.wgaas.mongodb.net/portfolio`  
  

## Running application:
  - Run server: server is running on port 5000  
    ```sh
    npm run start-server
    ```
  - Run client: Client is running on port 3000 (open another terminal)
    ```sh
    npm run start-client 
    ```

## Fetch data (testing)

Used Postman API and Thunder Client

## Deploy to Heroku
```sh
git add .
git commit -m "update application"
heroku git:remote -a jaythesia
git push heroku master
```




