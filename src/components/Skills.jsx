import "../styles/Skills.scss";
import IconNext from "../assets/icons/nextjs-icon.svg";
import IconSass from "../assets/icons/sass-icon.svg";
import IconStrapi from "../assets/icons/strapi-icon.svg";
import IconFigma from "../assets/icons/figma-icon.svg";
const Skills = () => {
  return (
    <div>
      <div className="skillsContainer">
        <div className="skillsContainer__iconsTitleContain">
          <img
            className="skillsContainer__icons"
            src={IconNext}
            alt="logo du framework Next.js"
          />
          <h3 className="skillsContainer__title">Next.js</h3>
        </div>
        <div className="skillsContainer__iconsTitleContain">
          <img
            className="skillsContainer__icons"
            src={IconStrapi}
            alt="logo du framework Strapi"
          />
          <h3 className="skillsContainer__title">Strapi</h3>
        </div>
        <div className="skillsContainer__iconsTitleContain">
          <img
            className="skillsContainer__icons"
            src={IconSass}
            alt="logo de Sass"
          />
          <h3 className="skillsContainer__title">Sass</h3>
        </div>
        <div className="skillsContainer__iconsTitleContain">
          <img
            className="skillsContainer__icons"
            src={IconFigma}
            alt="icone du logiciel de design Figma"
          />
          <h3 className="skillsContainer__title">Figma</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
