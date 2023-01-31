import React from "react";
import Login from "../components/authentification/Login";
import Register from "../components/authentification/Register";
import { useAuth } from "../hooks/auth";
import { Navigate } from "react-router";
import logo from "../assets/images/logo.svg";


const Authentification = (props) => {
  const { state, actions } = useAuth();

  const handleLogin = (user, password) => {
    actions.login(user, password);
  };

  const handleRegister = () => {};

  return (
    <>
    <div class="login_body inscription_body">
    <section class="login_logo inscription_logo">
        <img class="login_logo_img inscription_logo_img" src={logo} alt="Image du logo du site artichaux"/>
    </section>
    <section class="login_connexion inscription_connexion">

      {!state.isAuthenticated ? (
        // <div>
        <>
          {props.login ? <Login onLogin={handleLogin} /> : <Register onRegister={handleRegister} />}
          </>
        // </div>
      ) : (
        <Navigate to='/dashboard' />
      )}
    </section>
    </div>
    </>
  );
};

export default Authentification;
