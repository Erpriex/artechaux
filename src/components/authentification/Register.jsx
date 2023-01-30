import React from "react";

const Register = (props) => {
  return (
    <form>
      <input type='text' name='lastName' label='Nom' />
      <input type='text' name='firstName' label='Prenom' />
      <input type='email' name='mail' label='Email' />
      <input type='password' name='password' label='Mot de passe' />
      <input type='password' name='confirmPassword' label='Confirmation du mot de passe' />
      <input type='submit' name='register' label='Inscription' />
    </form>
  );
};

export default Register;
