import React, { useCallback, useEffect, useState } from "react";
import { useDirectus } from "../hooks/directus";
import ProjectView from "../components/ProjectView";
import TasksList from "../components/TasksList";
import { useParams } from "react-router";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import TasksChart from "../components/TasksChart";

const ProjectDashboard = (props) => {
  const { id } = useParams();
  const [project, setProject] = useState();

  const { projectID, handleList } = props;

  const [onglet, setOnglet] = useState("details");

  const directus = useDirectus();

  const getData = useCallback(() => {
    directus
      .items("projects")
      .readOne(id)
      .then((data) => {
        setProject(data);
        console.log(data);
      });
  }, [id, directus]);

  console.log("Project readOne : " + project);

  useEffect(() => {
    getData();
    const intervalID = setInterval(getData, 3600000);
    return () => {
      clearInterval(intervalID);
    };
  }, [getData]);

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
      <main class='main'>
        <div class='main-container'>
          <h1 class='main-container_title'>
            Construction d'une maison neuve clé en main de 100 m<sup>2</sup>
          </h1>
        </div>
        <section class='dashboard-container'>
          <div class='dashboard-container_top'>
            <a
              class={
                onglet === "details"
                  ? "dashboard-container_top_link active"
                  : "dashboard-container_top_link"
              }
              href='#'
              onClick={() => setOnglet("details")}>
              Détail du projet
            </a>
            <a
              class={
                onglet === "tasklist"
                  ? "dashboard-container_top_link active"
                  : "dashboard-container_top_link"
              }
              href='#'
              onClick={() => setOnglet("tasklist")}>
              Liste des tâches
            </a>
            <a
              class={
                onglet === "taskchart"
                  ? "dashboard-container_top_link active"
                  : "dashboard-container_top_link"
              }
              href='#'
              onClick={() => setOnglet("taskchart")}>
              Courbes des charges
            </a>
            <a class='dashboard-container_top_link' href='#'>
              GANTT
            </a>
          </div>
          {onglet === "details" ? project && <ProjectView project={project} /> : ""}
          {onglet === "tasklist" ? project && <TasksList projectID={id} /> : ""}
          {onglet === "taskchart"
            ? project && <TasksChart projectid={id} width={1400} height={500} />
            : ""}
        </section>
      </main>
      {/* <button onClick={handleList}>Retour à la liste</button> */}

      {/* <button onClick={() => setOnglet("tasklist")}>Liste des tâches</button> */}
    </div>
  );
};

export default ProjectDashboard;
