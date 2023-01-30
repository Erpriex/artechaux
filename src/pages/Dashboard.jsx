import React from "react";
import Logout from "../components/authentification/Logout";
import useSecure from "../hooks/useSecure";

const Dashboard = () => {
  useSecure();

  return (
    <div>
      <Logout />
    </div>
  );
};

export default Dashboard;
