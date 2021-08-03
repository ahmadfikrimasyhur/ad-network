import axios from "axios";

const Register = async (email, password) => {
  try {
    const response = await axios.post("/signup", {
      email,
      password,
    });

    return response.data;
  } catch (err) {
    return err;
  }
};

const Login = async (email, password) => {
  try {
    const response = await axios.post("/login", {
      email,
      password,
    });

    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (err) {
    return err;
  }
};

const Logout = () => {
  localStorage.removeItem("user");
};

const GetUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthenticationHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
};

export { Register, Login, Logout, GetUser, AuthenticationHeader };
