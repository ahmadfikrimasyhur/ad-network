const countries = require("../utils/countries.json");

exports.GetCountryList = async (req, res) => {
  return res.json(countries);
};

//simulating a real query with async
