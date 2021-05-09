const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://devorein:Devorein123@172.22.0.2:27017/?authSource=admin", {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(()=>{
  console.log('Successfully connected to database')
}).catch(err=>{
  console.log("Error", err.message)
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));

app.get("/",(_,res)=>{
  res.send(`<h2>Listening at port ${PORT} in ${process.env.NODE_ENV} environment</h2>`)
})