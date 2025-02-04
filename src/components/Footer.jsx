import "../styles/Footer.scss";
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
        <a href="https://bff.ecoindex.fr/redirect/?url=https://www.devstree.fr/" target="_blank">
          <img
            src="https://bff.ecoindex.fr/badge/?theme=dark&url=https://www.devstree.fr/"
            alt="Ecoindex Badge"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
