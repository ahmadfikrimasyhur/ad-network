const CountryController = require("../controller/CountryController");
const express = require("express");
const routes = express.Router();

routes.get("/countries", CountryController.GetCountryList);

module.exports = routes;
