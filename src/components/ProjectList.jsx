import React, { useCallback, useEffect, useState } from "react";
import { useDirectus } from "../hooks/directus";
import ProjectView from "./ProjectView";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const ProjectList = (props) => {
  const [projectsList, setProjectsList] = useState([]);

  const { handleView, handleEdit, handleDelete } = props;

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
    <>
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
            <h1 class='main-container_title'>Liste de vos projets</h1>
            <a href='#' class='btn'>
              Ajouter un projet
            </a>
          </div>

          <section class='dashboard-container'>
            <table id='resizeMe' class='og_hotline_table'>
              <thead>
                <tr>
                  <th onclick='sortTable(0)'>
                    Titre du projet
                    <div class='og_content_produit_spec_chevron'></div>
                    <div class='resizer' style={{ height: "583px" }}></div>
                  </th>
                  <th onclick='sortTable(1)'>
                    Etat du projet
                    <div class='og_content_produit_spec_chevron'></div>
                    <div class='resizer' style={{ height: "583px" }}></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {projectsList.map((project, index) => (
                  <tr>
                    <td>
                      <p>{project.name}</p>
                    </td>
                    <td>
                      <p
                        class={
                          project.status === "in_progress"
                            ? "status-current"
                            : project.status === "done"
                            ? "status-done"
                            : project.status === "planned"
                            ? "status-plan"
                            : ""
                        }>
                        {project.status === "in_progress" ? "En cours" : ""}
                        {project.status === "planned" ? "Planifié" : ""}
                        {project.status === "done" ? "Terminé" : ""}
                        {project.status === "draft" ? "Brouillon" : ""}
                      </p>
                    </td>
                    <td class='crud'>
                      <a href='#'>
                        <span class='eye'></span>
                      </a>
                      <a href='#'>
                        <span class='pen'></span>
                      </a>
                      <a href='#'>
                        <span class='bin'></span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </>
  );
};

export default ProjectList;
