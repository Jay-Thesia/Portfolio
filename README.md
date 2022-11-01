# Welcome to my portfolio project
**Deploy at:** [https://www.jaythesia.me/](https://www.jaythesia.me)

## Technology stack
**Tech stack:** MERN (**M**ongoDB - **E**xpressJS - **R**eactJS - **N**odeJS)

## Installation  
- Clone project 
```sh
git clone https://github.com/Jay-Thesia/Portfolio.git
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
    
    ```PORT=5000
    MONGO_URI=mongodb+srv://<username>:<Password>@cluster0.n8fxu.mongodb.net/<DATABASE Name>?retryWrites=true&w=majority

    TOKEN_SECRET=<Your token secret>
    NODE_ENV=production

    CLOUD_NAME=<Cloudinary cloud name>
    CLOUD_API_KEY=<Cloudinary cloud api key>
    CLOUD_API_SECRET=<Cloudinary cloud api secret>

    CLIENT_ID=<google console client id for auth>
    CLIENT_SECRET=<google console client secret for auth>
    CLIENT_REFRESH_TOKEN=<google console client refresh token for auth>``` 

  

## Running application:
  - Run server: server is running on port 5000  
    ```sh
    npm run server
    ```
  - Run client: Client is running on port 3000 (open another terminal)
    ```sh
    npm run client 
    ```
  - Run client: Client is running on port 3000 and server on port 5000 simultaneously
    ```sh
    npm run dev
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
