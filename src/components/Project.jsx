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
import Filter from "./Filter"; // Import du composant Filter

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
      description: `Mon projet sur l'application web Kasa était l'intégration d'une maquette Figma en React & SASS.
                    J'ai dû créer et implémenter plusieurs pages et les lier grâce à React-Router-Dom, créer des composant réutilisables.
                    Le plus difficile à gérer, c'était l'affichage de la page
                    404 pour une erreur d'ID de cards et de créer différent styles pour le même composant comme les collaspes.`,
      icons: [IconReact, IconSass],
      linkGithub: "https://github.com/Guillaumedev69/Kasa-Fr",
      linkProjet: "https://kasa-fr.vercel.app/",
    },
    {
      img: ImgSophieBluel,
      title: "Sophie Bluel - Portfolio en ligne",
      category: "Frontend",
      description: `Le sujet principal de ce projet était l'intégration d'une maquette Figma avec JavaScript & CSS.
Dans la maquette, j'avais des modales à créer avec une liaison vers l'API CRUD pour que le client puisse Ajouter, Afficher, Modifier ou Supprimer des projets de sa galerie.
Cela m'a donné quelques difficultés pour mes premiers appels API avec Fetch et pour la création de modale.`,
      icons: [IconJavascript, IconCss],
      linkGithub: "https://github.com/Guillaumedev69/Portfolio_Sophie_Bluel",
    },
    {
      img: ImgBooki,
      title: "Booki - Agence de voyage",
      category: "Frontend",
      description: `Booki étant mon premier projet, je devais intégrer une maquette figma en utilisant uniquement HTML et CSS.
                    Mes difficultés sur ce projet ont été le responsive design et les petits 
                    détails de la maquette qui étaient différents suivants les tailles d'écrans.`,
      icons: [IconHtml, IconCss],
      linkGithub: "https://github.com/Guillaumedev69/Booki_integration",
      linkProjet: "https://guillaumedev69.github.io/Booki_integration/",
    },
    {
      img: ImgMonVieuxGrimoire,
      title: "Mon Vieux Grimoire - librairie",
      category: "Backend",
      description: `Mon Vieux Grimoire et une application web en React qui permet aux utilisateurs de s'inscrire et/ou de se connecter pour ajouter des livres en ligne et de les noter.
                    Ma mission était de créer la partie serveur avec une base de données (CRUD) pour que les clients puissent Ajouter, Afficher, Modifier ou Supprimer les livres ajoutés.
                    Pour moi, les points les plus compliqués ont été de gérer l'ajout et le traitement des images avec multer et Sharp.`,
      icons: [IconNode, IconMongo],
      linkGithub: "https://github.com/Guillaumedev69/Mon-Vieux-Grimoire",
      linkProjet: "",
    },
    {
      img: ImgTeumaMaquette,
      title: "TEUMA SME - Cadre Externalisé",
      category: "Création",
      description: `Création de site de cours ...`,
      icons: [IconReact, IconSass, IconFigma],
    },
    {
      img: ImgNinaCarducci,
      title: "Nina CARDUCCI - Photographe Professionnel",
      category: "Optimisation",
      description: `Nina CARDUCCI est une photographe qui avait besoin d'amélioration sur son portfolio. Après analyse, des optimisations sur les performances, l'accessibilité et le SEO ont été réalisés ainsi que la correction de plusieurs bugs des fonctionnalités.`,
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
      {/* Utilisation du composant Filter */}
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
