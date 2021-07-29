import axios from "axios";
import { useState, useEffect } from "react";

const CountrySelect = (props) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/countries");
      setCountries(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="select">
          <select defaultValue="" name={props.name} onChange={props.onChange}>
            <option disabled={true} value="">
              Choose your target country
            </option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
