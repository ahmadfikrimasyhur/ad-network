//packages
const express = require("express");
const db = require("./database/config");
const mongoose = require("mongoose");
var cors = require("cors");
const path = require("path");

const port = process.env.PORT || 3001;

// routes
const userRoute = require("./routes/user");
const campaignRoute = require("./routes/campaign");
const countryRoute = require("./routes/country");

//init express
const app = express();

mongoose.connect(db.uri, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(function (req, res, next) {
  setTimeout(next, 500);
}); //DELAY FOR TESTING

app.use(express.json());
app.use(cors());
app.use(userRoute);
app.use(campaignRoute);
app.use(countryRoute);

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log("Server is running...");
});
