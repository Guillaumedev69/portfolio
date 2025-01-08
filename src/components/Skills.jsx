import "../styles/Skills.scss";
import { useEffect, useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY_SKILL;

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/api/skills?populate=*`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Réponse API skills :", data);
        if (data && data.data) {
          const formattedSkills = data.data.map((item) => ({
            id: item.id,
            ...item,
          }))
          .sort((a, b) => a.order - b.order);
          setSkills(formattedSkills);
        } else {
          console.error("Format inattendu :", data);
        }
      })
      .catch((err) => console.error("Erreur API :", err));
  }, []);

  return (
    <div>
      <div className="skillsContainer">
        {skills.map((skill) => (
          <div className="skillsContainer__iconsTitleContain" key={skill.id}>
            <img
              className="skillsContainer__icons"
              src={`${apiUrl}${skill.icons.url}`}
              alt={`logo de ${skill.title}`}
            />
            <h3 className="skillsContainer__title">{skill.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
