const PlayerModel = require("../models/player.model");
const PlayerController = {};
const positionsValidate = [
  "gk",
  "cb",
  "lb",
  "rb",
  "cm",
  "cdm",
  "cam",
  "cf",
  "st",
  "rw",
  "lw",
  "rm",
  "lm",
  "rf",
  "lf",
];
PlayerController.CreateNewPlayer = (req, res) => {
  return PlayerModel.createNew(req.body.playerObject)
    .then((result) => {
      return res.json(result);
    })
    .catch((error) => {
      return res.json(error);
    });
};
//- returns all data in players collection
PlayerController.GetPlayersData = (req, res) => {
  return PlayerModel.GetPlayersData()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};
//- gets player by its name
PlayerController.GetplayerByName = (req, res) => {
  return PlayerModel.GetByPlayerName(req.params.player)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};
//- update, add, remmove player positions
PlayerController.UpdatePlayerPositions = async (req, res) => {
  const { id, positions, operation } = req.body;
  try {
    if (!positionsValidate.includes(positions.new)) {
      return res.json("position must be in the enum list!");
    }
    let result = await PlayerModel.UpdatePositions(id, positions, operation);
    return res.json(result);
  } catch (error) {
    return res.json(error);
  }
};
//- remove player by id
PlayerController.RemovePlayerById = async (req, res) => {
  const id = req.params.id;
  try {
    let result = await PlayerModel.RemovePlayer(id);
    return res.json(result);
  } catch (error) {
    return res.json(error);
  }
};
module.exports = PlayerController;
