import React from "react";
import Login from "../components/authentification/Login";
import Register from "../components/authentification/Register";
import { useAuth } from "../hooks/auth";
import { Navigate } from "react-router";

const Authentification = (props) => {
  const { state, actions } = useAuth();

  const handleLogin = (user, password) => {
    actions.login(user, password);
  };

  const handleRegister = () => {};

  return (
    <>
      {!state.isAuthenticated ? (
        <div>
          {props.login ? <Login onLogin={handleLogin} /> : <Register onRegister={handleRegister} />}
        </div>
      ) : (
        <Navigate to='/dashboard' />
      )}
    </>
  );
};

export default Authentification;
