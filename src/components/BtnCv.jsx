import "../styles/BtnCv.scss";
import Cv from "../../public/destree_guillaume_cv.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const BtnCv = () => {
  return (
    <div className="btnCv">
      <a href={Cv} download>
        <button>Téléchargez mon CV !</button>
      </a>
        <FontAwesomeIcon icon={faDownload} className="iconBtnCv" />
    </div>
  );
};

export default BtnCv;
