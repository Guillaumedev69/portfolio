import "../styles/Project.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Filter from "./Filter";
const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY_PROJECT;

const Project = () => {
  const [flippedCards, setFlippedCards] = useState([]);
  const [filter, setFilter] = useState("Création");
  const [projects, setProjects] = useState([]);

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

  useEffect(() => {
    fetch(`${apiUrl}/api/projectcards?populate=*`, {
      method: "GET",
      headers: {
        Authorization:
          `Bearer${apiKey}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Réponse API project :", data);
        if (data && data.data) {
          const formattedProjects = data.data.map((item) => ({
            id: item.id,
            ...item,
          }));
          setProjects(formattedProjects);
        } else {
          console.error("Format inattendu :", data);
        }
      })
      .catch((err) => console.error("Erreur API :", err));
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
                    src={`${apiUrl}${project.img.url}`}
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
                        project.icons.length > 0 &&
                        project.icons.map((icon, iconIndex) => (
                          <img
                            className="cardsIcons"
                            src={`${apiUrl}${icon.url}`}
                            alt={"Icon de la technologie utilisées"}
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
