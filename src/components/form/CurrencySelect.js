import axios from "axios";
import { useState, useEffect } from "react";

const CurrencySelect = (props) => {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCurrencies = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/currencies");
      setCurrencies(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="select">
          <select defaultValue="" name={props.name} onChange={props.onChange}>
            <option disabled={true} value="">
              Choose your bid currency
            </option>
            {currencies.map((currency) => (
              <option key={currency.cc} value={currency.cc}>
                {currency.cc} - {currency.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default CurrencySelect;
