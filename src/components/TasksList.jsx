import React, { useCallback, useEffect, useState } from "react";
import { useDirectus } from "../hooks/directus";

const TasksList = (props) => {
  const [tasksList, setTasksList] = useState([]);

  const { handleView, handleEdit, handleDelete, projectID } = props;

  const directus = useDirectus();

  const getData = useCallback(() => {
    directus
      .items("services")
      .readByQuery({
        filter: {
          project: {
            _eq: projectID,
          },
          name: {
            _neq: null,
          },
        },
      })
      .then((data) => {
        setTasksList(data.data);
        console.log(data);
        console.log(data.data);
      });
  }, [directus]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <div class='dashboard-container_content'>
        <table id='resizeMe' class='og_hotline_table'>
          <thead>
            <tr>
              <th onclick='sortTable(0)'>
                Titre de la tâche
                <div class='og_content_produit_spec_chevron'></div>
                <div class='resizer' style={{ height: "583px" }}></div>
              </th>
              <th onclick='sortTable(1)'>
                Etat de la tâche
                <div class='og_content_produit_spec_chevron'></div>
                <div class='resizer' style={{ height: "583px" }}></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tasksList.map((task, index) => (
              <tr>
                <td>
                  <p>{task.name}</p>
                </td>
                <td>
                  <p class='status-current'>
                    {task.status === "in_progress" ? "En cours" : ""}
                    {task.status === "planned" ? "Planifié" : ""}
                    {task.status === "done" ? "Terminé" : ""}
                    {task.status === "draft" ? "Brouillon" : ""}
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
      </div>
    </>
  );
};

export default TasksList;
