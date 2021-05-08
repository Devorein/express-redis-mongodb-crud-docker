const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));

app.get("/",(_,res)=>{
  res.send(`<h2>Listening at port ${PORT} in ${process.env.NODE_ENV} environment</h2>`)
})