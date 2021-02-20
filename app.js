const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.get("/tshirts", function(req,res) {
  res.status(200).send({
    tshirt:"👕",
    size:"large"
  });
});

app.post("/tshirts/:id", function(req,res) {
const {id} = req.params;
const {logo} = req.body;

if(!logo)
{
  res.send({message:"We need the logo"});
}else{
  res.send({
    tshirt:"👕 that contains"+ logo + "and id of" + id
  });
}

});













app.listen("3000", function() {

console.log("server is running on port number 3000");

});
