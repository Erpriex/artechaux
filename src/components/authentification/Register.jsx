import React, { useState } from "react";
import { useDirectus } from "../../hooks/directus";

const Register = (props) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const directus = useDirectus();

  const isSamePassword = () => {
    return password === confirmPassword;
  };

  const passwordMoreThan6 = () => {
    return password.length >= 6;
  };

  const handleAddAdmin = (event) => {
    event.preventDefault();

    if (isSamePassword && passwordMoreThan6) {
      directus
        .items("directus_roles")
        .readByQuery("directus_roles")
        .then((data) => {
          const user = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            role: data.data[0].id,
            status: "active",
          };

          directus
            .items("directus_users")
            .createOne(user)
            .then((data) => data);
        });
    } else {
      console.log("le mot de passe est pété");
    }
  };

  return (
    <form onSubmit={handleAddAdmin}>
      <label htmlFor='lastName'>Nom</label>
      <input type='text' name='lastName' onChange={(event) => setLastName(event.target.value)} />
      <label htmlFor='firstName'>Prenom</label>
      <input type='text' name='firstName' onChange={(event) => setFirstName(event.target.value)} />
      <label htmlFor='mail'>Email</label>
      <input type='email' name='mail' onChange={(event) => setEmail(event.target.value)} />
      <label htmlFor='password'>Mot de passe</label>
      <input
        type='password'
        name='password'
        onChange={(event) => setPassword(event.target.value)}
      />
      <label htmlFor='confirmPassword'>Confirmation du mot de passe</label>
      <input
        type='password'
        name='confirmPassword'
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      <input type='submit' name='register' value='Inscription' />
    </form>
  );
};

export default Register;
