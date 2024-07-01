import "../styles/Skills.scss";
import IconReact from "../assets/icons/react-icon.svg";
import IconSass from "../assets/icons/sass-icon.svg";
import IconJavascript from "../assets/icons/javascript-icon.svg";
import IconCss from "../assets/icons/css-icon.svg";
import IconHtml from "../assets/icons/html-icon.svg";
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
            src={IconJavascript}
            alt="logo du langage JavaScript"
          />
          <h3 className="skillsContainer__title">JavaScript</h3>
        </div>
        <div className="skillsContainer__iconsTitleContain">
          <img
            className="skillsContainer__icons"
            src={IconCss}
            alt="logo du langage de style CSS"
          />
          <h3 className="skillsContainer__title">CSS 3</h3>
        </div>
        <div className="skillsContainer__iconsTitleContain">
          <img
            className="skillsContainer__icons"
            src={IconHtml}
            alt="logo du langage HTML"
          />
          <h3 className="skillsContainer__title">HTML 5</h3>
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
