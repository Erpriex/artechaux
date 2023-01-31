import React, { useState } from "react";
import { useDirectus } from "../../hooks/directus";

const Register = (props) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isRegister, setIsRegister] = useState(false);
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
              setIsRegister(true);
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
      {!isRegister ? (
        // <form onSubmit={handleAddAdmin}>
        //   <label htmlFor='lastName'>Nom</label>
        //   <input
        //     type='text'
        //     name='lastName'
        //     onChange={(event) => setLastName(event.target.value)}
        //   />
        //   <label htmlFor='firstName'>Prenom</label>
        //   <input
        //     type='text'
        //     name='firstName'
        //     onChange={(event) => setFirstName(event.target.value)}
        //   />
        //   <label htmlFor='mail'>Email</label>
        //   <input type='email' name='mail' onChange={(event) => setEmail(event.target.value)} />
        //   <label htmlFor='password'>Mot de passe</label>
        //   <input
        //     type='password'
        //     name='password'
        //     onChange={(event) => setPassword(event.target.value)}
        //   />
        //   <label htmlFor='confirmPassword'>Confirmation du mot de passe</label>
        //   <input
        //     type='password'
        //     name='confirmPassword'
        //     onChange={(event) => setConfirmPassword(event.target.value)}
        //   />
        //   <input type='submit' name='register' value='Inscription' />
        // </form>

        // <div class="inscription_short_input">
        //         <div>
        //             <label class="inscription_label" for="nom">Nom</label>
        //             <input class="inscription_input_medium" type="text" name="nom" id="nom">
        //         </div>
        //         <div>
        //             <label class="inscription_label" for="prenom">Prenom</label>
        //             <input class="inscription_input_medium" type="text" name="prenom" id="prenom">
        //         </div>
        //     </div>
            
        //     <label class="inscription_label" for="email">Email</label>
        //     <input class="inscription_input" type="text" name="email" id="email">

        //     <label class="inscription_label" for="mdp">Mot de passe</label>
        //     <input class="inscription_input" type="password" name="mdp" id="mdp">

        //     <label class="inscription_label" for="mdp">Confirmation du mot de passe</label>
        //     <input class="inscription_input" type="password" name="mdp" id="mdp">


        //     <input class="inscription_button" type="submit" value="Inscription"></input>
        
        ///////////////////////////////////////////////////////////

    //     <div class="inscription_body">
    
    // <section class="inscription_logo">
    //     {/* <img class="inscription_logo_img" src="./assets/images/logo.svg" alt="Image du logo du site artichaux"> */}
    // </section>
    
    // <section class="inscription_connexion">
    <>

            <h2 class="inscription_subtitle">Inscription</h2>
            <h1 class="inscription_title">Bienvenue sur ArtEchaux</h1>
            <form onSubmit={handleAddAdmin}>
            <div class="inscription_short_input">
                <div>
                <label class="inscription_label" htmlFor='lastName'>Nom</label>
          <input class="inscription_input_medium"
            type='text'
            name='lastName'
            onChange={(event) => setLastName(event.target.value)}
          />
                </div>
                <div>
                <label class="inscription_label" htmlFor='firstName'>Prenom</label>
          <input class="inscription_input_medium"
            type='text'
            name='firstName'
            onChange={(event) => setFirstName(event.target.value)}
          />
                </div>
            </div>
            
            <label class="inscription_label" htmlFor='mail'>Email</label>
          <input class="inscription_input" type='email' name='mail' onChange={(event) => setEmail(event.target.value)} />
          <label class="inscription_label" htmlFor='password'>Mot de passe</label>
          <input class="inscription_input"
            type='password'
            name='password'
            onChange={(event) => setPassword(event.target.value)}
          />

<label class="inscription_label" htmlFor='confirmPassword'>Confirmation du mot de passe</label>
          <input class="inscription_input"
            type='password'
            name='confirmPassword'
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <input class="inscription_button" type='submit' name='register' value='Inscription' />
          </form>
          </>
  //   </section>
  // </div>
      ) : (
        <h1>Vous êtes enregistré - vous allez être redirigé</h1>
      )}
    </>
  );
};

export default Register;
