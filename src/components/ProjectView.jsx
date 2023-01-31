import React, { useCallback, useEffect, useState } from "react";
import { useDirectus } from "../hooks/directus";
import logo from "../assets/images/logo.svg";
import daniel from "../assets/images/daniel.png";
import christian from "../assets/images/christiant.png";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ProjectView = (props) => {
  const { id } = useParams();
  const { project } = props;

  console.log("ProjectView : " + project);
  console.log(id);

  return (
    <div className='dashboard_body'>
      <div class='dashboard-container_content'>
        <h2 class='dashboard-container_content_title'>
          Début du projet : <span>{new Date(project.start_date).toLocaleDateString("fr")}</span>
        </h2>
        <h2 class='dashboard-container_content_title'>
          Fin du projet : <span>11/03/2023</span>
        </h2>
        <h2 class='dashboard-container_content_title'>
          Nombre de personnes : <span>6</span>
        </h2>
        <div class='dashboard-container_content_status'>
          <h2 class='dashboard-container_content_title'>Statut des personnes : </h2>
          <div class='status-cards'>
            <div class='status-card'>
              <h3 class='status-card_title'>Owner</h3>

              <div class='status-card_person'>
                <div class='status-card_person_image'>
                  <img src={daniel} alt='' />
                </div>
                <div class='status-card_person_info'>
                  <p class='status-card_person_info_name'>Daniel</p>
                  <p class='status-card_person_info_email'>daniel@gmail.com</p>
                </div>
              </div>

              <div class='status-card_person'>
                <div class='status-card_person_image'>
                  <img src={christian} alt='' />
                </div>
                <div class='status-card_person_info'>
                  <p class='status-card_person_info_name'>Christian</p>
                  <p class='status-card_person_info_email'>christian@gmail.com</p>
                </div>
              </div>
            </div>
            <div class='status-card'>
              <h3 class='status-card_title'>Peintre</h3>

              <div class='status-card_person'>
                <div class='status-card_person_image'>
                  <img src={daniel} alt='' />
                </div>
                <div class='status-card_person_info'>
                  <p class='status-card_person_info_name'>Daniel</p>
                  <p class='status-card_person_info_email'>daniel@gmail.com</p>
                </div>
              </div>

              <div class='status-card_person'>
                <div class='status-card_person_image'>
                  <img src={christian} alt='' />
                </div>
                <div class='status-card_person_info'>
                  <p class='status-card_person_info_name'>Christian</p>
                  <p class='status-card_person_info_email'>christian@gmail.com</p>
                </div>
              </div>
            </div>
            <div class='status-card'>
              <h3 class='status-card_title'>Charpentier</h3>

              <div class='status-card_person'>
                <div class='status-card_person_image'>
                  <img src={daniel} alt='' />
                </div>
                <div class='status-card_person_info'>
                  <p class='status-card_person_info_name'>Daniel</p>
                  <p class='status-card_person_info_email'>daniel@gmail.com</p>
                </div>
              </div>

              <div class='status-card_person'>
                <div class='status-card_person_image'>
                  <img src={christian} alt='' />
                </div>
                <div class='status-card_person_info'>
                  <p class='status-card_person_info_name'>Christian</p>
                  <p class='status-card_person_info_email'>christian@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 class='dashboard-container_content_title'>
          Lieu : <span>{project.location}</span>
        </h2>
      </div>
      {/* {project ? (
        <>
          <p>Nom : {project.name}</p>
          <p>Lieu : {project.location}</p>
          <p>
            Status : {project.status === "in_progress" ? "En cours" : ""}
            {project.status === "planned" ? "Planifié" : ""}
            {project.status === "done" ? "Terminé" : ""}
          </p>
        </>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default ProjectView;
