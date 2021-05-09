const express = require("express");
const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT, PORT, NODE_ENV } = require("./configs");

const app = express();

function retryDatabaseConnection(){
  console.log("Retrying mongodb connection");
  mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  }).then(()=>{
    console.log('Successfully connected to database')
  }).catch(err=>{
    console.log("Error", err.message)
    setTimeout(retryDatabaseConnection, 5000)
  });
}

retryDatabaseConnection();

app.listen(PORT, ()=> console.log(`Listening at port ${PORT} in ${NODE_ENV} environment`));

app.get("/",(_,res)=>{
  res.send(`<h2>Listening at port ${PORT} in ${NODE_ENV} environment</h2>`)
})