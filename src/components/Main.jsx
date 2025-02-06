import "../styles/Main.scss";
import PhotoProfil from "../assets/guillaumeProfil.webp";
import BtnContact from "./BtnContact";
import ContactForm from "./FormContact";
import Project from "./Project";
import Skills from "./Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import BtnRdv from "./BtnRdv";
import Header from "./Header";
import TextIntro from "./TextIntro";
import EndSectionOne from "./EndSectionOne";
import EndSectionTwo from "./EndSectionTwo";
import EndSectionThree from "./EndSectionThree";
import EndSectionFour from "./EndSectionFour";
import Tarifs from "./Tarifs";

const Main = () => {
  return (
    <main className="main" id="main">
      <Header />
      <section className="sectionIntro">
        <TextIntro />
      </section>
      <section className="sectionInfo" id="about">
        <EndSectionOne />
        <div className="sectionInfoContent">
          <div className="containerTitlePBtn">
            <div className="containerTitle">
              <h2 className="titleFirstInfo aboutTitle">GUILLAUME DESTRÉE</h2>
            </div>
            <p className="pInfo">
              Vous souhaitez donner vie à un projet ou mettre à jour votre site
              web ?
              <br />
              <br />
              J&apos;aide les indépendants et petites entreprises à se démarquer en ligne grâce à des sites modernes, rapides et éco-responsables.
              <br />
              <br />
              J&apos;analyse et optimise votre site web pour augmenter ses
              performances, accroître votre visibilité et améliorer
              l&apos;expérience utilisateur.
              <br />
              <br />
            </p>
            <BtnContact />
            <BtnRdv />
          </div>
          <img
            src={PhotoProfil}
            className="imgInfo"
            alt="Photo de Guillaume DESTRÉE"
          />
        </div>
      </section>
      <section className="sectionProject" id="project">
        <EndSectionTwo />
        <h2 className="projectTitle">Projets</h2>
        <Project />
      </section>
      <section className="sectionSkills" id="skills">
        <EndSectionThree />
        <h2 className="skillsTitle">SKILLS</h2>
        <Skills />
        <EndSectionFour />
      </section>
      <section className="sectionTarif" id="tarif">
        <h2 className="tarifTitle">TARIFS</h2>
        <Tarifs/>
      </section>
      <section className="sectionContact" id="contact">
        <h2 className="contactTitle">CONTACT</h2>
        <ContactForm />
        <a href="#main">
          <FontAwesomeIcon className="iconA" icon={faAnglesUp} title="up" />
        </a>
      </section>
    </main>
  );
};

export default Main;
