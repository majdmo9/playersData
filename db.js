const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const DB_URL =
  "mongodb+srv://majd123:ma1jd1mo1@cluster0.tstqv.mongodb.net/footballTeam?retryWrites=true&w=majority";

const connectToDB = async () => {
  try {
    const connect = await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Connected to ${DB_URL} Database!`);
  } catch (error) {
    console.log("There is an error", error);
  }
};
connectToDB();
