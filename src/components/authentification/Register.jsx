import React, { useState } from "react";
import { useDirectus } from "../../hooks/directus";
import { Navigate } from "react-router-dom";

const Register = (props) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isRegister, setIsRegister] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [onError, setOnError] = useState(false);
  const [errror, setError] = useState("");

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
            .then((data) => {
              console.log(data);
              setTimeout(() => setIsRegister(true), 3000);
              setTimeout(() => setIsWaiting(true), 3000);
            })
            .catch((error) => {
              console.log(error);
              setOnError(true);
              setError(error);
            });
        });
    } else {
      console.log("le mot de passe est pété");
    }
  };

  return (
    <>
      {isWaiting && <Navigate to='/login' />}
      {!isRegister ? (
        <>
          <h2 class='inscription_subtitle'>Inscription</h2>
          <h1 class='inscription_title'>Bienvenue sur ArtEchaux</h1>
          <form onSubmit={handleAddAdmin}>
            <div class='inscription_short_input'>
              <div>
                <label class='inscription_label' htmlFor='lastName'>
                  Nom
                </label>
                <input
                  class='inscription_input_medium'
                  type='text'
                  name='lastName'
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>
              <div>
                <label class='inscription_label' htmlFor='firstName'>
                  Prenom
                </label>
                <input
                  class='inscription_input_medium'
                  type='text'
                  name='firstName'
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </div>
            </div>

            <label class='inscription_label' htmlFor='mail'>
              Email
            </label>
            <input
              class='inscription_input'
              type='email'
              name='mail'
              onChange={(event) => setEmail(event.target.value)}
            />
            <label class='inscription_label' htmlFor='password'>
              Mot de passe
            </label>
            <input
              class='inscription_input'
              type='password'
              name='password'
              onChange={(event) => setPassword(event.target.value)}
            />

            <label class='inscription_label' htmlFor='confirmPassword'>
              Confirmation du mot de passe
            </label>
            <input
              class='inscription_input'
              type='password'
              name='confirmPassword'
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <input class='inscription_button' type='submit' name='register' value='Inscription' />
          </form>
        </>
      ) : (
        <h1>Vous êtes enregistré - vous allez être redirigé</h1>
      )}
    </>
  );
};

export default Register;
