import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Footer.scss"
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2024, DEV_STRÉE</p>
            <Link to="/auth" >
            <FontAwesomeIcon className="btnSign" icon={faUser} />
            </Link>
        </footer>
    );
};

export default Footer;