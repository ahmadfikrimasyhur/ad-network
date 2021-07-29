import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = () => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setError] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError([]);

    if (!email || !password) {
      setError("Erro: email ou senha inválidos");
      return;
    }

    history.push("/dashboard");
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="field">
        <label className="label">E-mail</label>
        <div className="control">
          <input
            className={`input ${errors && "is-danger"}`}
            type="email"
            placeholder="mymail@mail.com"
            onChange={(e) => {
              handleEmail(e);
            }}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
            className={`input ${errors && "is-danger"}`}
            type="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            onChange={(e) => {
              handlePassword(e);
            }}
          />
        </div>
        {errors && <p className="has-text-danger is-size-7">{errors}</p>}
      </div>
      <div class="field is-grouped is-flex">
        <div className="control">
          <button className="button is-info">Login</button>
        </div>
        <div className="control">
          <button className="button is-light">Sign up</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
