import React, { useCallback, useEffect, useState } from "react";
import useSecure from "../hooks/useSecure";
import { Link } from "react-router-dom";
import { useDirectus } from "../hooks/directus";

const Dashboard = () => {
  useSecure();

  const [projectsList, setProjectsList] = useState([]);

  const directus = useDirectus();

  const getData = useCallback(() => {
    directus
      .items("projects")
      .readByQuery("projects")
      .then((data) => {
        setProjectsList(data.data);
        console.log(data);
        console.log(data.data);
      });
  }, [directus]);

  useEffect(() => {
    getData();
    const intervalID = setInterval(getData, 3600000);
    return () => {
      clearInterval(intervalID);
    };
  }, [getData]);

  return (
    <div>
      <h1>Project List</h1>

      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Status</th>
            <th>Utilities</th>
          </tr>
        </thead>
        <tbody>
          {projectsList.map((i, index) => (
            <tr key={i.id}>
              <td>{i.name}</td>
              <td>{i.status}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to='/logout'>Déconnexion</Link>
    </div>
  );
};

export default Dashboard;
