const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
mongoose.connect("mongodb://localhost:27017/tshirtsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const shirtsSchema = new mongoose.Schema({
  tshirt: String,
  size: String
});
const Tshirt = mongoose.model("Tshirt",shirtsSchema);

/***************************HTTP request verbs for the main route******************************************/
app.get("/tshirts", function(req, res) {
  Tshirt.find(function(err, findItems) {
    if (findItems) {
      res.send({
        "success": "true",
        "data": findItems
      });
    } else {
      res.send("error");
    }
  });
});


app.post("/tshirts", function(req, res) {
  const newTshirt = new Tshirt({
    tshirt: req.body.tshirt,
    size: req.body.size
  });
  newTshirt.save(function(err) {
    if (err) {
      res.send("error");
    } else {
      res.send({
        "success": "true",
        "data": {
          "tshirt": req.body.tshirt,
          "size": req.body.size
        }
      });
    }
  });
});

/************************************HTTP request verbs for a specific route*********************************************/
app.get("/tshirts/:shirtModel", function(req, res) {
  const shirtName = req.params.shirtModel;
  Tshirt.findOne({
    tshirt: shirtName
  }, function(err, findItem) {
    if (findItem) {
      res.send({
        "success": "true",
        "data": findItem
      });
    } else {
      res.send("error");
    }
  });

});



app.put("/tshirts/:shirtModel", function(req, res) {
  Tshirt.update({
      tshirt: req.params.shirtModel
    }, {
      tshirt: req.body.tshirt,
      size: req.body.size
    }, {
      overwrite: true
    },
    function(err) {
      if (!err) {
        res.send("Successfully updated the entire document");
      } else {
        res.send("error");
      }

    });
});


app.patch("/tshirts/:shirtModel", function(req, res) {
  Tshirt.update({
      tshirt: req.params.shirtModel
    }, {
      $set: req.body
    },
    function(err) {
      if (!err) {
        res.send( {
          "success":"true",
          "message":"updated the part of document"
        });
      } else {
        res.send("error");
      }
    }
  );
});


app.delete("/tshirts/:shirtModel", function(req, res) {
  Tshirt.deleteOne({
      tshirt: req.params.shirtModel
    },
    function(err) {
      if (!err) {
        res.send("removed the item");
      } else {
        res.send("error");
      }
    }
  );

});


app.listen("3000", function() {

  console.log("server is running on port number 3000");

});
