const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
//const {mongoURI} = require('./config/keys');

const items = require("./routes/api/items");

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//CONNECT TO MONGO
mongoose
  .connect(
    "mongodb://bernard:bernard123@ds213615.mlab.com:13615/mern_shopping",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDb Connected..."))
  .catch(err => console.log(err));

//use Routes
app.use("/api/items", items);

//Serve sttatic assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
