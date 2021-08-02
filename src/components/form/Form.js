import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "./Button";

import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Login } from "../../services/auth";

const Form = () => {
  const history = useHistory();

  const [data, setData] = useState({ email: "", password: "" });

  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (!data.email) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Empty e-mail!",
      }));
      return;
    } else if (!data.email.includes("@")) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Invalid e-mail!",
      }));
      return;
    }

    if (!data.password) {
      setErrors((prevState) => ({
        ...prevState,
        password: "Empty password!",
      }));
      return;
    }

    try {
      const login = await Login(data.email, data.password);
      console.log(login);
      if (login.auth) {
        history.push("/dashboard");
      } else {
        setErrors((prevState) => ({
          ...prevState,
          validation: login.response.data.message,
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex-1 p-5 shadow-2xl bg-gray-50 rounded-md space-y-5">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="space-y-4"
      >
        <div>
          <label className="font-semibold text-gray-800">E-mail</label>
          <div className="control space-y-2">
            <div
              className={`relative text-gray-400 ${
                errors.email && "text-red-500"
              } focus-within:text-infleux-500`}
            >
              <FontAwesomeIcon
                className="absolute top-3 left-3"
                icon={faEnvelope}
              />
              <input
                className={`w-full rounded-md border-0 text-gray-800 ring-1 ring-gray-50 outline-none focus:ring-1 focus:ring-infleux-500 shadow-md pl-9 ${
                  errors.email && "ring-1 ring-red-500"
                }`}
                placeholder="mymail@mail.com"
                onChange={(e) => {
                  handleInput(e);
                }}
                type="text"
                name="email"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label className="font-semibold text-gray-800">Password</label>
          <div className="control  space-y-2">
            <div
              className={`relative text-gray-400 ${
                errors.password && "text-red-500"
              } focus-within:text-infleux-500`}
            >
              <FontAwesomeIcon className="absolute top-3 left-3" icon={faKey} />
              <input
                className={`w-full rounded-md border-0 text-gray-800 ring-1 ring-gray-50 outline-none focus:ring-1 focus:ring-infleux-500 shadow-md pl-9 ${
                  errors.password && "ring-1 ring-red-500"
                }`}
                type="password"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                onChange={(e) => {
                  handleInput(e);
                }}
                name="password"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}
          </div>
        </div>
        <div className="flex space-x-2 mt-5">
          <Button type="submit">Login</Button>
          <Button type="button" inverted={true}>
            Sign up
          </Button>
        </div>
      </form>

      {errors.validation && (
        <div className="text-red-500 text-sm font-bold text-center">
          {errors.validation}
        </div>
      )}
    </div>
  );
};

export default Form;
