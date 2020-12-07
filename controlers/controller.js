var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

//get router
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    let hdlbrsObj = {
      burgers: data,
    };

    res.render("index", hdlbrsObj);
  });
});

//post router
// POST route for saving a new post
router.post("/api/burger", function (req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, false],
    function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

//put router
router.put("/api/burger/:id", function (req, res) {
  let id = req.params.id;
  burger.updateOne(id, function (result) {});
});

//delete router
router.delete("/api/burger/:id", function (req, res) {
  let id = req.params.id;
  burger.deleteOne(id, function (result) {});
});

module.exports = router;
