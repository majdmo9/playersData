const PlayerModel = require("../schema/player.schema");
//- Add new player to players collection
PlayerModel.createNew = (PlayerObject) => {
  const newPlayer = new PlayerModel({
    playerName: PlayerObject.playerName,
    number: PlayerObject.number,
    positions: PlayerObject.positions,
    rating: PlayerObject.rating,
  });
  return newPlayer
    .save()
    .then((result) => result)
    .catch((err) => err);
};
//- returns all players objects from players collection
PlayerModel.GetPlayersData = () => {
  return PlayerModel.find({})
    .exec()
    .then((result) => result)
    .catch((err) => err);
};
//- returns one player by name
PlayerModel.GetByPlayerName = (player) => {
  return PlayerModel.find({ playerName: player })
    .exec()
    .then((result) => result)
    .catch((err) => err);
};
//- Update player positions update one, add, remove
PlayerModel.UpdatePositions = async (id, positions, operation) => {
  var finalResult;
  try {
    switch (operation) {
      case "add":
        console.log("Add");
        finalResult = await PlayerModel.updateMany(
          { _id: id },
          { $addToSet: { positions: positions.new } },
          { new: true }
        ).exec();
        break;
      case "update":
        console.log("Update");
        finalResult = await PlayerModel.updateMany(
          { _id: id, positions: positions.current },
          { $set: { "positions.$": positions.new } },
          { new: true }
        ).exec();
        break;
      case "remove":
        console.log("Remove");
        finalResult = await PlayerModel.updateMany(
          { _id: id },
          { $pull: { positions: positions.current } },
          { new: true }
        ).exec();
    }
  } catch (error) {
    finalResult = error;
  } finally {
    return finalResult;
  }
};
//- Removes player form collection
PlayerModel.RemovePlayer = async (id) => {
  var finalResult;
  try {
    finalResult = await PlayerModel.findByIdAndRemove(id).exec();
    return finalResult;
  } catch (error) {
    return error;
  }
};
module.exports = PlayerModel;
