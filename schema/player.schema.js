const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = require("bluebird");
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
//?Player Schema
const PlayerSchema = new Schema({
  playerName: {
    type: String,
    min: 3,
    max: 30,
  },
  number: {
    type: Number,
    min: 1,
  },
  positions: [
    {
      type: [String],
      enum: positionsValidate,
      required: "Please specify at least one factor.",
    },
  ],
  rating: {
    type: Number,
    min: 1,
    max: 99,
  },
});
const PlayerModel = mongoose.model("Player", PlayerSchema);
module.exports = PlayerModel;
