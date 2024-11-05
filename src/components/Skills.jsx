import "../styles/Skills.scss";
import IconReact from "../assets/icons/react-icon.svg";
import IconNext from "../assets/icons/nextjs-icon.svg";
import IconSass from "../assets/icons/sass-icon.svg";
import IconNode from "../assets/icons/node-icon.svg";
import IconMongo from "../assets/icons/mongo-icon.svg";
import IconFigma from "../assets/icons/figma-icon.svg";

const Skills = () => {
  return (
    <div>
      <div className="skillsContainer">
        <div className="skillsContainer__iconsTitleContain">
          <img
            className="skillsContainer__icons"
            src={IconNext}
            alt="logo du framework REACT"
          />
          <h3 className="skillsContainer__title">Next.js</h3>
        </div>
        <div className="skillsContainer__iconsTitleContain">
          <img
            className="skillsContainer__icons"
            src={IconReact}
            alt="logo du framework REACT"
          />
          <h3 className="skillsContainer__title">React</h3>
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
            src={IconMongo}
            alt="logo de la base de données MongoDB"
          />
          <h3 className="skillsContainer__title">MongoDB</h3>
        </div>
        <div className="skillsContainer__iconsTitleContain">
          <img
            className="skillsContainer__icons"
            src={IconNode}
            alt="logo du langage Node.js"
          />
          <h3 className="skillsContainer__title">Node.js</h3>
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
