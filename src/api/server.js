const express = require("express");
const db = require("../database/config");
const mongoose = require("mongoose");

const userRoute = require("./routes/user");
const fetchRoute = require("./routes/fetch");
const countryRoute = require("./routes/country");

const app = express();

mongoose.connect(db.uri, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(userRoute);
app.use(fetchRoute);
app.use(countryRoute);

app.listen(3001, () => {
  console.log("Server is running...");
});
