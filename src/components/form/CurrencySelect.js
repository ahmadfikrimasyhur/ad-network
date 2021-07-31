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
        <select
          defaultValue="default"
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
          className={`className="w-full rounded-md border-0 text-gray-800 ring-1 ring-gray-50 outline-none focus:ring-1 focus:ring-blue-500 shadow-md ${props.className}`}
        >
          <option disabled={true} value="default">
            Choose your bid currency
          </option>
          {currencies.map((currency) => (
            <option key={currency.cc} value={currency.cc}>
              {currency.cc} - {currency.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default CurrencySelect;
