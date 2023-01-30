import React, { useState } from "react";
import useSecure from "../../hooks/useSecure";
import { useAuth } from "../../hooks/auth";
import { Navigate } from "react-router";

const Logout = () => {
  const { state, actions } = useAuth();

  const [waiting, setwaiting] = useState(true);

  setTimeout(() => setwaiting(false), 3000);

  if (state.isAuthenticated) {
    actions.logout();
  }

  return waiting ? (
    <div>Vous êtes bien déconecté - Vous allez être redirigé</div>
  ) : (
    <Navigate to='/' />
  );
};

export default Logout;
