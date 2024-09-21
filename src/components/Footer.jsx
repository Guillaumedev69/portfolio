import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Footer.scss";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__link">
        <a href="/#about" className="footerLink">
          <li>À propos</li>
        </a>
        <a href="/#project" className="footerLink">
          <li>Projets</li>
        </a>
        <a href="/#skills" className="footerLink">
          <li>Skills</li>
        </a>
        <a href="/#tarif" className="footerLink">
          <li>Tarifs</li>
        </a>
        <a href="/#contact" className="footerLink">
          <li>Contact</li>
        </a>
        <Link to="/LegalMention" className="footerLink">
          Mentions legales
        </Link>
      </ul>

      <div className="footer__info">
        <p className="noneMobile">07 88 23 53 92</p>
        <a href="mailto:devstree.guillaume@gmail.com" className="noneMobile">
          <p>devstree.guillaume@gmail.com</p>
        </a>
        <p>&copy; 2024, DEV_STRÉE</p>
        <Link to="/auth">
          <FontAwesomeIcon
            className="btnSign"
            icon={faUser}
            title="connexion"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
