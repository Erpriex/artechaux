import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

import icon1 from "../assets/images/icon_1.png";
import icon2 from "../assets/images/icon_2.png";
import icon3 from "../assets/images/icon_3.png";
import icon4 from "../assets/images/icon_4.png";

import listProject from "../assets/images/list_project.png";
import dashboard from "../assets/images/Dashboard.png";


const Home = () => {
  return (
    <>
      <nav>
        <a href='#'>
          <img class='logo' src={logo} />
        </a>
        <ul>
          <li>
            <a href='#artechaux'>ArtEchaux</a>
          </li>
          <li>
            <a href='#gantt'>GANTT</a>
          </li>
          <li>
            <a href='#dashboard'>Dashboard</a>
          </li>
          <li class='contact'>
            <a href='#' class='btn-border'>
              Inscription
            </a>
            <a href='#' class='btn-border btn-border--filed'>
              Connexion
            </a>
          </li>
        </ul>
        <button class='menu_toggler'>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <header>
        <div class='header-container'>
          <div class='header-container_left'>
            <h1 class='header-container_left_text'>
              Gérez vos projets artisanaux en toute simplicité, suivez son avancée et gérez vos
              budgets.
            </h1>
            <h2 class='header-container_left_title'>
              ArtEchaux, la solution de gestion de vos projets
            </h2>
            <a href='#' class='btn'>
              Découvrir
            </a>
          </div>
        </div>
        <div class='header-container_right'></div>
      </header>

      <main>
        <section id='artechaux' class='solutions-container'>
          <div class='solutions-container_center'>
            <h2 class='solutions-container_center_title'>Découvrir ArtEchaux</h2>
            <p class='solutions-container_center_text'>
              Le concept d’ArtEchaux repose sur 4 piliers, qui vous permettent de gérer vos projets
              efficacement :
            </p>
          </div>
          <div class='solutions-container_center'>
            <div class='solutions-container_center_flex'>
              <div class='card-solution'>
                <div class='card-solution_image'>
                  <img src={icon3} alt='' class='' />
                </div>
                <h3 class='card-solution_title'>Performance</h3>
                <p class='card-solution_text'>
                  Avancez dans vos projets tout en étant performants.
                </p>
              </div>
              <div class='card-solution'>
                <div class='card-solution_image'>
                  <img src={icon4} alt='' class='' />
                </div>
                <h3 class='card-solution_title'>Facilité </h3>
                <p class='card-solution_text'>Utilisez nos outils avec facilité.</p>
              </div>
              <div class='card-solution'>
                <div class='card-solution_image'>
                  <img src={icon2} alt='' class='' />
                </div>
                <h3 class='card-solution_title'>Collaboration</h3>
                <p class='card-solution_text'>Collaborez avec votre équipe à travers vos tâches.</p>
              </div>
              <div class='card-solution'>
                <div class='card-solution_image'>
                  <img src={icon1} alt='' class='' />
                </div>
                <h3 class='card-solution_title'>Gestion</h3>
                <p class='card-solution_text'>Gérez vos projets en les divisant en tâches.</p>
              </div>
            </div>
          </div>
        </section>

        <section class='artechaux-container'>
          <div class='artechaux-container_left'>
            <h2 class='artechaux-container_left_title'>Gérer votre équipe avec ArtEchaux</h2>
            <p class='artechaux-container_left_text'>
              Attribuez des tâches à vos membres d’équipe au sein de vos projets.{" "}
            </p>
          </div>
          <div class='artechaux-container_right'>
            <div class='artechaux-container_right_image'>
              <img src={listProject} alt='' />
            </div>
          </div>
        </section>

        <section id='gantt' class='gantt-container'>
          <div class='gantt-container_left'>
            <h2 class='gantt-container_left_title'>Établissez intuitivement votre GANTT</h2>
            <p class='gantt-container_left_text'>
              Créez votre GANTT avec facilité, pour suivre les étapes de vos projets. Vous verrez
              ainsi leur avancée, et ce qu’il reste à faire.{" "}
            </p>
          </div>
          <div class='gantt-container_right'>
            <div class='gantt-container_right_image'>
              <img src='./assets/images/Gantt.png' alt='' />
            </div>
          </div>
        </section>

        <section id='dashboard' class='dashboard-home-container'>
          <div class='dashboard-home-container_center'>
            <h2 class='dashboard-home-container_center_title'>Personnalisez votre Dashboard</h2>
            <p class='dashboard-home-container_center_text'>
              Suivez les données de vos projets en temps réel.
            </p>
            <div class='dashboard-home-container_center_image'>
              <img src={dashboard} alt='' />
            </div>
          </div>
        </section>

        <footer class='footer-container'>
          <nav>
            <a href='#'>
              <img class='logo' src={logo} />
            </a>
            <ul>
              <li>
                <a href='#artechaux'>ArtEchaux</a>
              </li>
              <li>
                <a href='#gantt'>GANTT</a>
              </li>
              <li>
                <a href='#dashboard'>Dashboard</a>
              </li>
            </ul>
            <a href='#' class='btn btn--dark'>
              Inscription
            </a>
          </nav>
        </footer>
      </main>
      {/* <div>
        <Link to='/login'>Connexion</Link>
        <br />
        <Link to='/register'>Inscription</Link>
      </div> */}
    </>
  );
};

export default Home;
