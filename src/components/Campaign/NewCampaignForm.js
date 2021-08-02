import { useState } from "react";
import axios from "axios";

import CountrySelect from "../form/CountrySelect";
import CurrencySelect from "../form/CurrencySelect";
import Button from "./../form/Button";

import { AuthenticationHeader, GetUser } from "../../services/auth";

import { faSignature, faGavel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreateCampaignForm = (props) => {
  const [data, setData] = useState({});
  const [errors, setError] = useState({});

  const handleChange = async (e) => {
    const { value, name } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/campaign/create",
        { ...data, id: GetUser().id },
        { headers: AuthenticationHeader() }
      );
      console.log(response);
      props.fetchCampaign();
      props.close();
    } catch (err) {
      console.log(err);
    }
  };

  const validateInput = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "name":
        if (!value) {
          setError((prevState) => ({ ...prevState, name: "Empty name" }));
        } else {
          setError((prevState) => ({ ...prevState, name: undefined }));
        }
        break;
      case "conversion":
        if (value === "default") {
          setError((prevState) => ({
            ...prevState,
            conversion: "Select a conversion type!",
          }));
        } else {
          setError((prevState) => ({ ...prevState, conversion: undefined }));
        }
        break;
      case "cost":
        if (!value) {
          setError((prevState) => ({
            ...prevState,
            bid: "Your bid must not be empty!",
          }));
        } else if (value === 0) {
          setError((prevState) => ({
            ...prevState,
            bid: "Your bid must not be zero!",
          }));
        } else {
          setError((prevState) => ({ ...prevState, bid: undefined }));
        }
        break;
      case "country":
        if (value === "default") {
          setError((prevState) => ({
            ...prevState,
            country: "Select a valid targeting country!",
          }));
        } else {
          setError((prevState) => ({ ...prevState, country: undefined }));
        }
        break;
      case "currency":
        if (value === "default") {
          setError((prevState) => ({
            ...prevState,
            currency: "Select a valid currency!",
          }));
        } else {
          setError((prevState) => ({ ...prevState, currency: undefined }));
        }
        break;
      default:
        console.log("default");
    }
  };

  return (
    <div>
      <form
        className="form space-y-4"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <label className="font-semibold text-gray-800">Campaign Name</label>
          <div className="control space-y-2">
            <div
              className={`relative text-gray-400 ${
                errors.name && "text-red-500"
              } focus-within:text-blue-500`}
            >
              <FontAwesomeIcon
                className={`absolute top-3 left-3 ${
                  errors.name && "text-red-500"
                }`}
                icon={faSignature}
              />
              <input
                name="name"
                type="text"
                className={`w-full rounded-md border-0 text-gray-800 ring-1 ring-gray-50 outline-none shadow-md pl-10 ${
                  errors.name
                    ? "ring-1 ring-red-500 focus:ring-red-500"
                    : "focus:ring-1 focus:ring-blue-500"
                }`}
                placeholder="Your campaign name"
                onChange={(e) => {
                  handleChange(e);
                }}
                onBlur={(e) => {
                  validateInput(e);
                }}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}
          </div>
        </div>

        <div>
          <label className="font-semibold text-gray-800">Conversion Type</label>
          <div className="select">
            <div className="control space-y-2">
              <select
                defaultValue="default"
                name="conversion"
                onChange={(e) => {
                  handleChange(e);
                }}
                onBlur={(e) => {
                  validateInput(e);
                }}
                className={`w-full rounded-md border-0 ring-1 ring-gray-50 outline-none focus:ring-1 focus:ring-blue-500 shadow-md ${
                  errors.conversion
                    ? "ring-1 ring-red-500 focus:ring-red-500 text-red-500"
                    : "focus:ring-1 focus:ring-blue-500 text-gray-800 "
                }`}
              >
                <option disabled={true} value="default">
                  Choose conversion type
                </option>
                <option value="cpm">Cost per mille impressions</option>
                <option value="cpc">Cost per click</option>
                <option value="cpi">Cost per install</option>
              </select>
              {errors.conversion && (
                <p className="text-red-500 text-xs">{errors.conversion}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex space-x-2">
          <div>
            <label className="font-semibold text-gray-800">Bid</label>
            <div
              className={`relative text-gray-400 ${
                errors.bid && "text-red-500"
              } focus-within:text-blue-500`}
            >
              <FontAwesomeIcon
                className={`absolute top-3 left-3 ${
                  errors.bid && "text-red-500"
                }`}
                icon={faGavel}
              />

              <input
                type="number"
                step="0.01"
                name="cost"
                className={`w-28 rounded-md border-0 text-gray-800 ring-1 ring-gray-50 outline-none  shadow-md pl-10 ${
                  errors.bid
                    ? "ring-1 ring-red-500 focus:ring-red-500"
                    : "focus:ring-1 focus:ring-blue-500"
                }`}
                placeholder="1.99"
                onChange={(e) => {
                  handleChange(e);
                }}
                onBlur={(e) => {
                  validateInput(e);
                }}
              />
              {errors.bid && (
                <p className="text-red-500 text-xs">{errors.bid}</p>
              )}
            </div>
          </div>
          <div>
            <label className="font-semibold text-gray-800">Currency</label>
            <CurrencySelect
              name="currency"
              className={`w-full rounded-md border-0 ring-1 ring-gray-50 outline-none focus:ring-1 shadow-md ${
                errors.currency
                  ? "ring-1 ring-red-500 focus:ring-red-500 text-red-500"
                  : "focus:ring-1 focus:ring-blue-500 text-gray-800 "
              }`}
              onChange={(e) => {
                handleChange(e);
              }}
              onBlur={(e) => {
                validateInput(e);
              }}
            />
            {errors.currency && (
              <p className="text-red-500 text-xs">{errors.currency}</p>
            )}
          </div>
        </div>
        <div>
          <label className="font-semibold text-gray-800">Country</label>
          <CountrySelect
            name="country"
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={(e) => {
              validateInput(e);
            }}
            className={`w-full rounded-md border-0 ring-1 ring-gray-50 outline-none focus:ring-1 shadow-md ${
              errors.country
                ? "ring-1 ring-red-500 focus:ring-red-500 text-red-500"
                : "focus:ring-1 focus:ring-blue-500 text-gray-800 "
            }`}
          />
          {errors.country && (
            <p className="text-red-500 text-xs">{errors.country}</p>
          )}
        </div>

        <div className="flex space-x-2">
          <Button type="submit">Create</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateCampaignForm;
