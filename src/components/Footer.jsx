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
        <p>&copy; 2025, DEV_STRÉE</p>
        <div id="ecoindex-badge" data-theme="dark"></div>
        <script src="https://cdn.jsdelivr.net/gh/cnumr/ecoindex_badge@3/assets/js/ecoindex-badge.js" defer></script>
      </div>
    </footer>
  );
};

export default Footer;
