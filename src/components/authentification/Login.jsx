import React, { useState } from "react";

const Login = (props) => {
  const [User, setUser] = useState("");
  const [Password, setPassword] = useState("");

  const connect = (event) => {
    event.preventDefault();
    props.onLogin(User, Password);
  };

  return (
    <>
      <h2 class='login_subtitle'>Identification</h2>
      <h1 class='login_title'>Bienvenue sur ArtEchaux</h1>
      <form onSubmit={connect}>
        <label class='inscription_label' htmlFor='user'>
          Utilisateur
        </label>
        <input
          class='inscription_input'
          type='text'
          name='user'
          value={User}
          onChange={(event) => setUser(event.target.value)}
        />
        <label class='inscription_label' htmlFor='password'>
          Mot de passe
        </label>
        <input
          class='inscription_input'
          type='password'
          name='password'
          value={Password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          class='inscription_button'
          type='submit'
          name='login'
          label='Connexion'
          value='Connexion'
        />
      </form>
    </>
  );
};

export default Login;
