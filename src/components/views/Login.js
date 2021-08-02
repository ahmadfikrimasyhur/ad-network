import LoginForm from "../Forms/Login/LoginForm";
import { Fragment } from "react";

const Login = () => {
  return (
    <Fragment>
      <h1 className="text-2xl text-center md:text-3xl font-bold text-white drop-shadow-sm	">
        Welcome to the Ad Network!
      </h1>
      <p className="text-xl text-white text-center">Please, login or signup.</p>
      <LoginForm />
    </Fragment>
  );
};

export default Login;
