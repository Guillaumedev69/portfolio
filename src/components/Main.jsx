import "../styles/Main.scss";
import PhotoProfil from "../assets/guillaumeProfil.webp";
import BtnContact from "./BtnContact";
import ContactForm from "./FormContact";
import Project from "./Project";
import Skills from "./Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import BtnCv from "./BtnCv";

const Main = () => {
  return (
    <main className="main">
      <section className="sectionIntro" id="main">
        <p className="pIntro">
          Bienvenue ! <br />
          <br />
          Vous êtes à la recherche d’un développeur web passionné pour réaliser
          vos projets ou compléter votre équipe ?
          <br />
          <br />
          Découvrez mon profil
        </p>
      </section>
      <section className="sectionInfo" id="about">
        <h2 className="aboutTitle">À PROPOS</h2>
        <div className="sectionInfoContent">
          <div className="containerTitlePBtn">
            <div className="containerTitle">
              <h2 className="titleFirstInfo">GUILLAUME DESTRÉE</h2>
              <h3 className="titleSecondInfo">Développeur Web</h3>
            </div>
            <p className="pInfo">
              Salut ! Je suis Guillaume, développeur web. Passionné par le
              développement web, j&apos;ai entrepris une reconversion
              professionnelle et obtenu mon BTS. Je maîtrise plusieurs langages
              tels que SASS, REACT, Node.js, Express, Mongo.DB etc. et plusieurs
              outils tels que Figma, Lighthouse, Wave, Trello, Notion, Slack
              etc. Vous trouverez quelques uns de mes projets dans mon
              portfolio.
              <br />
              <br /> Je suis à la recherche d&apos;opportunités professionnelles
              en tant que développeur front end/fullstack. Je suis à
              l&apos;écoute de toute proposition d&apos;emploi salarié et/ou de
              mission en freelance.
              <br />
              <br /> Je mettrai à votre service toutes mes connaissances, mes
              compétences et ma motivation et saurai m&apos;investir, apprendre
              et me perfectionner au quotidien.
            </p>
          </div>
          <img
            src={PhotoProfil}
            className="imgInfo"
            alt="Photo de Guillaume DESTRÉE"
          />
        </div>
        <BtnContact />
        <BtnCv />
      </section>
      <section className="sectionProject" id="project">
        <h2 className="projectTitle">PROJETS</h2>
        <Project />
      </section>
      <section className="sectionSkills" id="skills">
        <h2 className="sectionSkills__title">SKILLS</h2>
        <Skills />
      </section>
      <section className="sectionContact" id="contact">
        <h2 className="sectionContact__title">CONTACT</h2>
        <p>
          Le formulaire n&apos;est pas encore actif merci de cliquer directement
          sur le bouton &ldquo;Contactez-moi !&rdquo;
        </p>
        <ContactForm />
        <a href="#main">
          <FontAwesomeIcon icon={faAnglesUp} />
        </a>
      </section>
    </main>
  );
};

export default Main;
