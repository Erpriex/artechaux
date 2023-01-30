import React, { useState } from "react";

const Login = (props) => {
  const [User, setUser] = useState("");
  const [Password, setPassword] = useState("");

  const connect = (event) => {
    event.preventDefault();
    props.onLogin(User, Password);
  };

  return (
    <form onSubmit={connect}>
      <label htmlFor='user'>Utilisateur</label>
      <input
        type='text'
        name='user'
        value={User}
        onChange={(event) => setUser(event.target.value)}
      />
      <label htmlFor='password'>Mot de passe</label>
      <input
        type='password'
        name='password'
        value={Password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input type='submit' name='login' label='Connexion' />
    </form>
  );
};

export default Login;
