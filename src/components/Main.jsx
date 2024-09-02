import "../styles/Main.scss";
import PhotoProfil from "../assets/guillaumeProfil.webp";
import BtnContact from "./BtnContact";
import ContactForm from "./FormContact";
import Project from "./Project";
import Skills from "./Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import BtnCv from "./BtnCv";
import Header from "./Header";
import TextIntro from "./TextIntro";

const Main = () => {
  return (
    <main className="main" id="main">
      <Header />
      <section className="sectionIntro">
        <TextIntro />
        <p className="pIntro">
          <br />
          Vous êtes à la recherche d&apos;un développeur web passionné pour réaliser
          vos projets ou compléter votre équipe ?
          <br />
          <br />
          Découvrez mon profil
        </p>
        <div className="containericonIntro">
          <FontAwesomeIcon icon={faAnglesDown} className="iconIntro" />
          <FontAwesomeIcon icon={faAnglesDown} className="iconIntro" />
        </div>
      </section>
      <section className="sectionInfo" id="about">
        <div className="sectionInfoContent">
          <div className="containerTitlePBtn">
            <div className="containerTitle">
              <h2 className="titleFirstInfo aboutTitle">GUILLAUME DESTRÉE</h2>
            </div>
            <p className="pInfo">
              Je suis développeur spécialisé dans les sites Web et Mobile
              passionné par mon métier, je maîtrise principalement{" "}
              <span>REACT</span> et Node.js.
              <br />
              Je maitrise aussi plusieurs outils tels que Figma pour la lecture
              ou la création de maquette, Lighthouse et Wave pour
              l&apos;optimisation de votre site web ainsi que, Trello, Notion,
              Slack etc. Vous trouverez quelques uns de mes projets dans la
              section dédiée.
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
            <BtnContact />
            <BtnCv />
          </div>
          <img
            src={PhotoProfil}
            className="imgInfo"
            alt="Photo de Guillaume DESTRÉE"
          />
        </div>
      </section>
      <section className="sectionProject" id="project">
        <h2 className="projectTitle">Projets</h2>
        <Project />
      </section>
      <section className="sectionSkills" id="skills">
        <h2 className="skillsTitle">SKILLS</h2>
        <Skills />
      </section>
      <section className="sectionContact" id="contact">
        <h2 className="contactTitle">CONTACT</h2>
        <p>
          Le formulaire n&apos;est pas encore actif merci de cliquer directement
          sur le bouton &ldquo;Contactez-moi !&rdquo;
        </p>
        <ContactForm />
        <a href="#main">
          <FontAwesomeIcon className="iconA" icon={faAnglesUp} title="up" />
        </a>
      </section>
    </main>
  );
};

export default Main;
