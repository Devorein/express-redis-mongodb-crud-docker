const express = require("express");
const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT, PORT, NODE_ENV } = require("./configs");

const app = express();

mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(()=>{
  console.log('Successfully connected to database')
}).catch(err=>{
  console.log("Error", err.message)
});

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));

app.get("/",(_,res)=>{
  res.send(`<h2>Listening at port ${PORT} in ${NODE_ENV} environment</h2>`)
})