import React from "react";
import Login from "../components/authentification/Login";
import Register from "../components/authentification/Register";

const Authentification = (props) => {
  return <div>{props.login ? <Login /> : <Register />}</div>;
};

export default Authentification;
