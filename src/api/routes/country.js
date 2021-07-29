const CountryController = require("../controller/CountryController");
const express = require("express");
const routes = express.Router();

routes.get("/countries", CountryController.GetCountryList);
routes.get("/currencies", CountryController.GetCurrenciesList);

module.exports = routes;
