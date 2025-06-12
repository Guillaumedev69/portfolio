import "../styles/Project.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Filter from "./Filter";

const Project = () => {
  const [flippedCards, setFlippedCards] = useState([]);
  const [filter, setFilter] = useState("Création");
  const [projects, setProjects] = useState([]);

  const handleCardClick = (index) => {
    setFlippedCards((prevFlippedCards) => {
      const isAlreadyFlipped = prevFlippedCards.includes(index);
      return isAlreadyFlipped
        ? prevFlippedCards.filter((cardIndex) => cardIndex !== index)
        : [...prevFlippedCards, index];
    });
  };

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => console.error("Erreur lors du chargement des projets :", err));
  }, []);

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
              className={`cards ${flippedCards.includes(index) ? "flipped" : ""}`}
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <div className="cards__frontContent frontContent">
                <div className="inner">
                  <p className="frontContent__category">{project.category}</p>
                  <img
                    className="frontContent__Img"
                    src={`/assets/projects/${project.img}.webp`}
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
                      {project.icons &&
                        project.icons.map((icon, iconIndex) => {
                          const iconName = icon.replace("Icon", "").toLowerCase();
                          return (
                            <img
                              className="cardsIcons"
                              src={`/assets/icons/${iconName}-icon.svg`}
                              alt={`Icône ${iconName}`}
                              key={iconIndex}
                            />
                          );
                        })}
                    </div>
                    <div className="linkContain">
                      {project.linkProjet && (
                        <a
                          href={project.linkProjet}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="backContent__linkProjet"
                        >
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Voir le projet
                        </a>
                      )}
                      {project.linkGithub && (
                        <a
                          href={project.linkGithub}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="backContent__linkGithub"
                        >
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Voir sur GitHub
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
