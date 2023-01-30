import React from "react";
import Login from "../components/authentification/Login";
import Register from "../components/authentification/Register";

const Authentification = (props) => {
  const handleLogin = () => {};
  const handleRegister = () => {};

  return (
    <div>
      {props.login ? <Login onSubmit={handleLogin} /> : <Register onSubmit={handleRegister} />}
    </div>
  );
};

export default Authentification;
