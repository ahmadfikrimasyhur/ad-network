const countries = require("../utils/countries.json");
const currencies = require("../utils/currencies.json");

exports.GetCountryList = async (req, res) => {
  return res.json(countries);
};

exports.GetCurrenciesList = async (req, res) => {
  return res.json(currencies);
};
