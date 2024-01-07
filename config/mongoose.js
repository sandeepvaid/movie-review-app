//require library
const mongoose = require("mongoose");

//Connect to database
mongoose.connect("mongodb+srv://vaid77167:Back4132@movie-viewer.otfikxh.mongodb.net/");

//acquire connection to check if connection is succeessfull
const db = mongoose.connection;

//If error then we handle it
db.on("error", console.error.bind(console, "error connecting to db"));

//IF connection made is successful then we handle it there

db.once("open", function () {
  console.log("Successfull connection is established");
});
