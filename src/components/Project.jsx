import "../styles/Project.scss";
import { useState } from "react";
import ImgKasa from "../assets/imgKasa.webp";
import ImgSophieBluel from "../assets/imgSophieBluel.webp";
import ImgBooki from "../assets/imgBooki.webp";
import ImgMonVieuxGrimoire from "../assets/imgMonVieuxGrimoire.webp";
import ImgTeumaMaquette from "../assets/imgTeumaMaquette.webp";
import ImgNinaCarducci from "../assets/imgResultatNinaCarducci.webp";
import IconReact from "../assets/icons/react-icon.svg";
import IconSass from "../assets/icons/sass-icon.svg";
import IconJavascript from "../assets/icons/javascript-icon.svg";
import IconCss from "../assets/icons/css-icon.svg";
import IconHtml from "../assets/icons/html-icon.svg";
import IconNode from "../assets/icons/node-icon.svg";
import IconMongo from "../assets/icons/mongo-icon.svg";
import IconFigma from "../assets/icons/figma-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Filter from "./Filter";

const Project = () => {
  const [flippedCards, setFlippedCards] = useState([]);
  const [filter, setFilter] = useState("All");

  const handleCardClick = (index) => {
    setFlippedCards((prevFlippedCards) => {
      const isAlreadyFlipped = prevFlippedCards.includes(index);
      if (isAlreadyFlipped) {
        return prevFlippedCards.filter((cardIndex) => cardIndex !== index);
      } else {
        return [...prevFlippedCards, index];
      }
    });
  };

  const projects = [
    {
      img: ImgKasa,
      title: "Kasa - Location immobilière",
      category: "Frontend",
      description: `Projet: Intégration d'une maquette Figma avec React & SASS.
      
      Les missions:
      - Création et implémentation de plusieurs pages
      - Mise en place de React-Router-Dom
      - Création de composants réutilisables
      - Gestion de la page 404 "Not Found"`,
      icons: [IconReact, IconSass],
      linkGithub: "https://github.com/Guillaumedev69/Kasa-Fr",
      linkProjet: "https://kasa-fr.vercel.app/",
    },
    {
      img: ImgSophieBluel,
      title: "Sophie Bluel - Portfolio en ligne",
      category: "Frontend",
      description: `Projet: Intégration d'une maquette Figma avec JavaScript & CSS.
                    
      Les missions:
      - Création des modales d'affichage et de gestion de galerie
      - Gestion de la galerie avec des requêtes vers l'API`,
      icons: [IconJavascript, IconCss],
      linkGithub: "https://github.com/Guillaumedev69/Portfolio_Sophie_Bluel",
    },
    {
      img: ImgBooki,
      title: "Booki - Agence de voyage",
      category: "Frontend",
      description: `Projet: Intégrer une maquette Figma en HTML & CSS.

      Les missions:
      - Gestion du responsive design
      - Ajustement des éléments en fonction des tailles d'écran`,
      icons: [IconHtml, IconCss],
      linkGithub: "https://github.com/Guillaumedev69/Booki_integration",
      linkProjet: "https://guillaumedev69.github.io/Booki_integration/",
    },
    {
      img: ImgMonVieuxGrimoire,
      title: "Mon Vieux Grimoire - librairie",
      category: "Backend",
      description: `Projet: Création de la partie serveur et de la base de données d'une application web de notations de livres en Node.js.

      Les missions:
      - Mise en service de la partie serveur
      - Création d'une base de données sur MongoDB
      - liaison en la DB et l'application web
      - Gestion des éléments de la base de données (CRUD)
      - Création du système de notation des livres
      - Mise en place d'un système d'authentification client
      - Création d'un traitement d'image à l'importation `,
      icons: [IconNode, IconMongo],
      linkGithub: "https://github.com/Guillaumedev69/Mon-Vieux-Grimoire",
      linkProjet: "",
    },
    {
      img: ImgTeumaMaquette,
      title: "TEUMA SME - Cadre Externalisé",
      category: "Création",
      description: `Projet: Création pour un Cadre Externalisé en React& Sass.
      
      Les missions:
      - Création d'une maquette sur Figma
      - Intégration de la maquette`,
      icons: [IconReact, IconSass, IconFigma],
    },
    {
      img: ImgNinaCarducci,
      title: "Nina CARDUCCI - Photographe Professionnel",
      category: "Optimisation",
      description: `Projet: Amélioration d'un portfolio d'une photographe.

      Les missions:
      - Analyse et détection de bus
      - Optimisation des performances, de l'accessibilité et du SEO
      - Correction de bugs impactant certaines fonctionnalités`,
      icons: [IconJavascript],
      linkGithub: "https://github.com/Guillaumedev69/Nina_Carducci",
      linkProjet: "https://guillaumedev69.github.io/Nina_Carducci/",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <Filter selectedCategory={filter} setFilter={setFilter} />

      <div className="containerCards">
        <div className="containerCards__carousel">
          {filteredProjects.map((project, index) => (
            <div
              className={`cards ${
                flippedCards.includes(index) ? "flipped" : ""
              }`}
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <div className="cards__frontContent frontContent">
                <div className="inner">
                  <p className="frontContent__category">{project.category}</p>
                  <img
                    className="frontContent__Img"
                    src={project.img}
                    alt={`capture d'écran du projet ${project.title}`}
                  />
                  <h3 className="frontContent__Title">{project.title}</h3>
                </div>
              </div>
              <div className="cards__backContent backContent">
                <div className="inner">
                  <p className="backContent__P">{project.description}</p>
                  <div className="cardsIconsContainerLink">
                    <div className="iconContainer">
                      {project.icons.map((icon, iconIndex) => (
                        <img
                          className="cardsIcons"
                          src={icon}
                          alt="project icon"
                          key={iconIndex}
                        />
                      ))}
                    </div>
                    <div className="linkContain">
                      {project.linkProjet && (
                        <a
                          href={project.linkProjet}
                          target="blank"
                          className="backContent__linkProjet"
                        >
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />{" "}
                          Voir le projet
                        </a>
                      )}
                      {project.linkGithub && (
                        <a
                          href={project.linkGithub}
                          target="blank"
                          className="backContent__linkGithub"
                        >
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />{" "}
                          Voir sur GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
