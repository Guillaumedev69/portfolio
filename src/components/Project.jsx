import "../styles/Project.scss";
import { useState } from "react";
import ImgKasa from "../assets/imgKasa.webp";
import ImgSophieBluel from "../assets/imgSophieBluel.webp";
import ImgBooki from "../assets/imgBooki.webp";
import ImgMonVieuxGrimoire from "../assets/imgMonVieuxGrimoire.webp";
import ImgTeumaMaquette from "../assets/imgTeumaMaquette.webp";
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

const Project = () => {
  const [flippedCards, setFlippedCards] = useState([]);

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
      description: `Mon projet sur l'application web Kasa était l'intégration
        d'une maquette Figma en React & SASS.
        J'ai dû créer et implémenter plusieurs pages et les lier
        grâce à React-Router-Dom, créer des composant réutilisables.
        Le plus difficile à gérer c'était l'affichage de la page
        404 pour une erreure d'ID de cards et de créer des style
        different pour le même composant comme les collaspes.`,
      icons: [IconReact, IconSass],
      link: "https://github.com/Guillaumedev69/Kasa-Fr",
    },
    {
      img: ImgSophieBluel,
      title: "Sophie Bluel - Portfolio en ligne",
      category: "Frontend",
      description: `Le sujet principal de ce projet était l'intégration d'une
        maquette Figma avec JavaScript & CSS.
        Dans la maquette j'avais des modales à créer avec une
        liaison vers l'API CRUD pour que le client puisse
        Ajouter, Afficher, Modifier ou Supprimer des projets de sa galerie.
        Ce m'a donné quelques difficultées pour mes premiers appels API
        avec Fetch et pour la création de modale.`,
      icons: [IconJavascript, IconCss],
      link: "https://github.com/Guillaumedev69/Portfolio_Sophie_Bluel",
    },
    {
      img: ImgBooki,
      title: "Booki - Agence de voyage",
      category: "Frontend",
      description: `Booki étant mon premier projet je devais integrer une maquette figma
        en utilisant uniquement HTML et CSS.
        Mes difficultées sur ce projet ont été le responsive design et les
        petits details de la maquette qui étaient différent suivant les
        tailles d'écrans.`,
      icons: [IconHtml, IconCss],
      link: "https://github.com/Guillaumedev69/Booki_integration",
    },
    {
      img: ImgMonVieuxGrimoire,
      title: "Mon Vieux Grimoire - librairie",
      category: "Backend",
      description: `Mon Vieux Grimoire et une application web en React qui permet aux
        utilisateurs de s'inscrire et/ou de se connecter pour ajouter
        des livres ne ligne et de les noter.
        Ma mission était de créer la partie serveur avec une base de données
        (CRUD) pour que les clients puissent
        Ajouter, Afficher, Modifier ou Supprimer les livres ajoutées.
        Pour moi les points les plus compliqué ont été de gérer l'ajout
        et le traitement des images avec multer et Sharp.`,
      icons: [IconNode, IconMongo],
      link: "https://github.com/Guillaumedev69/Mon-Vieux-Grimoire",
    },
    {
      img: ImgTeumaMaquette,
      title: "TEUMA SME - Cadre Externalisé",
      category: "Création",
      description: `Création de site de cours ...
      - Création de maquette
      - integration du site avec React/Sass
      - Optimisation de l'accessibilité et des performances
      - SEO
      - Déploiement`,
      icons: [IconReact, IconSass, IconFigma],
      link: "https://www.linkedin.com/company/teuma-sme/posts/?feedView=all",
    },
  ];

  return (
    <>
      <div className="containerCards">
        <div className="containerCards__carousel">
          {projects.map((project, index) => (
            <div
              className={`cards ${
                flippedCards.includes(index) ? "flipped" : ""
              }`}
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <div className="cards__frontContent  frontContent">
                <p className="frontContent__category">{project.category}</p>
                <img
                  className="frontContent__Img"
                  src={project.img}
                  alt={`capture d'écran du projet ${project.title}`}
                />
                <h3 className="frontContent__Title">{project.title}</h3>
              </div>
              <div className="cards__backContent backContent">
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

                  <a
                    href={project.link}
                    target="blank"
                    className="backContent__link"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Voir
                    plus
                  </a>
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
