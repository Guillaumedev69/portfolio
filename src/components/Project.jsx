import {
  FlippingCard,
  FlippingCardBack,
  FlippingCardFront,
} from "react-ui-cards";
import "../styles/Project.scss";
import ImgKasa from "../assets/imgKasa.webp";
import ImgSophieBluel from "../assets/imgSophieBluel.webp";
import ImgBooki from "../assets/imgBooki.webp";
import ImgMonVieuxGrimoire from "../assets/imgMonVieuxGrimoire.webp";
import IconReact from "../assets/icons/react-icon.svg";
import IconSass from "../assets/icons/sass-icon.svg";
import IconJavascript from "../assets/icons/javascript-icon.svg";
import IconCss from "../assets/icons/css-icon.svg";
import IconHtml from "../assets/icons/html-icon.svg";
import IconNode from "../assets/icons/node-icon.svg";
import IconMongo from "../assets/icons/mongo-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  return (
    <div className="containerCards">
      <FlippingCard className="cards">
        <FlippingCardBack>
          <p className="cards__P">
            Mon projet sur l&apos;application web Kasa était l&apos;intégration
            d&apos;une maquette Figma en React & SASS.
            <br /> J&apos;ai dû créer et implémenter plusieurs pages et les lier
            grâce à React-Router-Dom.
          </p>
          <div className="cardsIconsContainer">
            <img
              className="cardsIcons"
              src={IconReact}
              alt="logo du framework REACT"
            />
            <img className="cardsIcons" src={IconSass} alt="logo de Sass" />
            <a href="https://github.com/Guillaumedev69/Kasa-Fr" target="blank">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Voir plus
            </a>
          </div>
        </FlippingCardBack>
        <FlippingCardFront>
          <img
            className="cards__Img"
            src={ImgKasa}
            alt="capture d'écran du projet Kasa"
          />
          <h3 className="cards__Title">Kasa - Location immobilière</h3>
        </FlippingCardFront>
      </FlippingCard>
      <FlippingCard className="cards">
        <FlippingCardBack>
          <p className="cards__P">
            Le sujet principal de ce projet était l&apos;intégration d&apos;une
            maquette Figma avec JavaScript & CSS.
            <br /> Dans la maquette j&apos;avais des modales à créer avec une
            liaison vers l&apos;API CRUD pour que le client puisse
            Ajouter/Afficher/Modifier/Supprimer des projets de sa galerie.
          </p>
          <div className="cardsIconsContainer">
            <img
              className="cardsIcons"
              src={IconJavascript}
              alt="logo du langage JavaScript"
            />
            <img
              className="cardsIcons"
              src={IconCss}
              alt="logo du langage de style CSS"
            />
            <a
              href="https://github.com/Guillaumedev69/Portfolio_Sophie_Bluel"
              target="blank"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Voir plus
            </a>
          </div>
        </FlippingCardBack>
        <FlippingCardFront>
          <img
            className="cards__Img"
            src={ImgSophieBluel}
            alt="capture d'écran du projet Sophie Bluel"
          />
          <h3 className="cards__Title">Sophie Bluel - Portfolio en ligne</h3>
        </FlippingCardFront>
      </FlippingCard>
      <FlippingCard className="cards">
        <FlippingCardBack>
          <p className="cards__P">
            Booki étant mon premier projet je devais integrer une maquette figma
            en utilisant uniquement HTML et CSS.
          </p>
          <div className="cardsIconsContainer">
            <img
              className="cardsIcons"
              src={IconHtml}
              alt="logo du langage HTML"
            />
            <img
              className="cardsIcons"
              src={IconCss}
              alt="logo du langage de style CSS"
            />
            <a
              href="https://github.com/Guillaumedev69/Booki_integration"
              target="blank"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Voir plus
            </a>
          </div>
        </FlippingCardBack>
        <FlippingCardFront>
          <img
            className="cards__Img"
            src={ImgBooki}
            alt="capture d'écran du projet Booki"
          />
          <h3 className="cards__Title">Booki - Agence de voyage</h3>
        </FlippingCardFront>
      </FlippingCard>
      <FlippingCard className="cards">
        <FlippingCardBack>
          <p className="cards__P">
            Mon Vieux Grimoire et une application web en React qui permet aux
            utilisateurs de s&apos;inscrire et/ou de se connecter pour ajouter
            des livres ne ligne et de les noter.
            <br />
            Ma mission était de créer la partie serveur avec une base de données
            pour que les clients puissent Ajouter/Afficher/Modifier/supprimer
            les livres ajoutées.
          </p>
          <div className="cardsIconsContainer">
            <img
              className="cardsIcons"
              src={IconNode}
              alt="logo du langage Node.js"
            />
            <img
              className="cardsIcons"
              src={IconMongo}
              alt="logo de la base de données MongoDB"
            />
            <a
              href="https://github.com/Guillaumedev69/Mon-Vieux-Grimoire"
              target="blank"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Voir plus
            </a>
          </div>
        </FlippingCardBack>
        <FlippingCardFront>
          <img
            className="cards__Img"
            src={ImgMonVieuxGrimoire}
            alt="capture d'écran du projet Mon Vieux Grimoire"
          />
          <h3 className="cards__Title">Mon Vieux Grimoire - librairie</h3>
        </FlippingCardFront>
      </FlippingCard>
    </div>
  );
};

export default Project;
