var express = require("express");
var router = express.Router();
var PlayerController = require("../controllers/player.controller");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "majd" });
});
router.get("/player", PlayerController.GetPlayersData);
router.get("/player/:player", PlayerController.GetplayerByName);
//* post routes
router.post("/player/new", PlayerController.CreateNewPlayer);
//* update routes
router.put("/player/positions", PlayerController.UpdatePlayerPositions);
//* delete routes
router.delete("/player/:id", PlayerController.RemovePlayerById);
module.exports = router;
