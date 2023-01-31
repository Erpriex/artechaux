import React, { useCallback, useEffect, useState } from "react";
import useSecure from "../hooks/useSecure";
import { Link } from "react-router-dom";
import { useDirectus } from "../hooks/directus";
import logo from "../assets/images/logo.svg";
import arrow_right from "../assets/images/arrow_right.svg";

const Dashboard = () => {
  useSecure();

  const [projectsList, setProjectsList] = useState([]);

  const directus = useDirectus();

  const getData = useCallback(() => {
    directus
      .items("projects")
      .readByQuery({
        filter: {
          status: {
            _eq: "in_progress",
          },
        },
      })
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

  const translateStatus = (status) => {
    let result;
    switch (status) {
      case "in_progress":
        result = "En cours";
        break;
      case "done":
        result = "Terminé";
        break;
      case "planned":
        result = "Plannifié";
        break;
      default:
        break;
    }
    return result;
  };

  return (
    <div className='dashboard_body'>
      <aside class='sidebar'>
        <nav class='sidebar_nav'>
          <ul>
            <li>
              <img src={logo} alt='logo svg' />
            </li>
            <li>
              <Link class='sidebar_link' to='/dashboard'>
                Projets en cours
              </Link>
            </li>
            <li>
              <Link class='sidebar_link' to='/projectList'>
                Projets
              </Link>
            </li>
            <li>
              <Link class='sidebar_link' to='/logout'>
                Déconnexion
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main class='dashboard_main'>
        <h1 class='dashboard_title'>Vos projets en cours</h1>
        <section class='dashboard_container'>
          {projectsList.map((i, index) => (
            <>
              <article class='dashboard_card'>
                <Link style={{ textDecoration: "none" }} to={"/projectDetails/" + i.id}>
                  <div class='dashboard_card-green'>
                    <h3>{i.name}</h3>
                    <img src={arrow_right} alt='flèche image droite' />
                  </div>
                  <div class='dashboard_card-tag'>
                    <p>{i.location}</p>
                    <p>Owner</p>
                  </div>
                  <div class='dashboard_card-infos'>
                    <p>Début : {new Date(i.start_date).toLocaleDateString("fr")}</p>
                    <p>
                      <span> état : </span> {translateStatus(i.status)}
                    </p>
                  </div>
                </Link>
              </article>
            </>
          ))}
        </section>
      </main>

      {/* <table>
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
              <td>{translateStatus(i.status)}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      {/* <Link to='/logout'>Déconnexion</Link> */}
    </div>
  );
};

export default Dashboard;
