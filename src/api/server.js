//packages
const express = require("express");
const db = require("../database/config");
const mongoose = require("mongoose");
var cors = require("cors");

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

app.use(express.json());
app.use(cors());
app.use(userRoute);
app.use(campaignRoute);
app.use(countryRoute);

app.listen(3001, () => {
  console.log("Server is running...");
});
