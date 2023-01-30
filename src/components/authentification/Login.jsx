import React from "react";
import Input from "./Input";

const Login = () => {
  return (
    <div>
      <Input type='text' name='user' label='Utilisateur' />
      <Input type='password' name='password' label='Mot de passe' />
    </div>
  );
};

export default Login;
