import React from "react";
import Input from "./Input";

const Register = (props) => {
  return (
    <div>
      <Input type='text' name='lastName' label='Nom' />
      <Input type='text' name='firstName' label='Prenom' />
      <Input type='email' name='mail' label='Email' />
      <Input type='password' name='password' label='Mot de passe' />
      <Input type='password' name='confirmPassword' label='Confirmation du mot de passe' />
      <Input type='submit' name='register' label='Inscription' />
    </div>
  );
};

export default Register;
