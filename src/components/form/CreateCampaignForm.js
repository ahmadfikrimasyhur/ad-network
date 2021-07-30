import { useState } from "react";
import axios from "axios";

import CountrySelect from "./CountrySelect";
import CurrencySelect from "./CurrencySelect";

const CreateCampaignForm = (props) => {
  const [data, setData] = useState({});

  const [errors, setError] = useState("");

  const handleChange = async (e) => {
    const { value, name } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/fetch", data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  //TODO: USE FUNNEL FONTAWESOMEICON
  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="form"
        >
          <div className="field is-horizontal">
            <div className="control">
              <label className="label">Campaign Name</label>
              <input
                className={`input ${errors && "is-danger"}`}
                type="text"
                name="name"
                placeholder="Your campaign name"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="control">
              <label className="label">Conversion type</label>
              <div className="select">
                <select
                  defaultValue=""
                  name="conversion"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  <option disabled={true} value="">
                    Choose conversion type
                  </option>
                  <option value="cpm">Cost per mille impressions</option>
                  <option value="cpc">Cost per click</option>
                  <option value="cpi">Cost per install</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="control">
              <label className="label">Bid</label>
              <input
                className="input"
                type="number"
                step="0.01"
                name="bid"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="control">
              <label className="label">Currency</label>
              <CurrencySelect
                name="currency"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="control">
              <label className="label">Country</label>
              <CountrySelect
                name="country"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button type="submit" className="button is-info">
                Create
              </button>
            </div>
            <div className="control">
              <button className="button is-light" onClick={props.close}>
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaignForm;
