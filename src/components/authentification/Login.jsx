import React from "react";
import Input from "./Input";

const Login = () => {
  return (
    <div>
      <Input type='text' name='user' label='Utilisateur' />
      <Input type='password' name='password' label='Mot de passe' />
      <Input type='submit' name='login' label='Connexion' />
    </div>
  );
};

export default Login;
