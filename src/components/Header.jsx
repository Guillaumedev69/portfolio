import LogoGithub from "../assets/icons/github-icon.svg";
import LogoLinkedIn from "../assets/icons/linkedin-icon.svg";
import LogoInstagram from "../assets/icons/instagram-icon.svg";
import LogoX from "../assets/icons/x-icon.svg";
import "../styles/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [isBulleVisible, setIsNavVisible] = useState(false);
  const [isBtnInvisible, setIsBtnInvisible] = useState(false);

  const handleButtonClick = () => {
    setIsNavVisible(!isBulleVisible);
    setIsBtnInvisible(!isBtnInvisible);
  };
  return (
    <header>
      <div className="logo-header">
        <a href="/#main">
          <h1>[ DEV_STRÉE ]</h1>
          <p>
            DÉVELOPPEMENT
            <br />
            WEB
          </p>
        </a>
      </div>
      <nav className="nav">
        {!isBtnInvisible && (
          <button className="nav__btnBurger" id="buttonMenu" title="Menu" onClick={handleButtonClick}>
            <FontAwesomeIcon icon={faBars} className="burgerIcon" />
          </button>
        )}

        {isBulleVisible && (
          <>
            <ul className="nav__container-link-page">
              <a href="/#about" className="navLink">
                <li>À propos</li>
              </a>
              <a href="/#project" className="navLink">
                <li>Projets</li>
              </a>
              <a href="/#skills" className="navLink">
                <li>Skills</li>
              </a>
              <a href="/#contact" className="navLink">
                <li>Contact</li>
              </a>
            </ul>
            <ul className="container-link-url">
              <a
                href="https://github.com/Guillaumedev69"
                target="blank"
                className="navLink"
              >
                <li>
                  <img src={LogoGithub} alt="logo de la plateforme GitHub" />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/guillaume-destr%C3%A9e/"
                target="blank"
              >
                <li>
                  <img
                    src={LogoLinkedIn}
                    alt="Logo du réseau social LinkedIn"
                  />
                </li>
              </a>
              <a
                href="https://twitter.com/Devstree69"
                target="blank"
                className="navLink"
              >
                <li>
                  <img src={LogoX} alt="Logo du réseau social X(Twitter)" />
                </li>
              </a>
              <a
                href="https://www.instagram.com/dev_stree/"
                target="blank"
                className="navLink"
              >
                <li>
                  <img
                    src={LogoInstagram}
                    alt="Logo du réseau social Instagram"
                  />
                </li>
              </a>
              
              <li className="btnAccess">
                <button>Access</button>
              </li>
            </ul>
            <button onClick={handleButtonClick}>
              <FontAwesomeIcon icon={faXmark} className="burgerIcon close" />
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
