import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to='/login'>Connexion</Link>
      <br />
      <Link to='/register'>Inscription</Link>
    </div>
  );
};

export default Home;
