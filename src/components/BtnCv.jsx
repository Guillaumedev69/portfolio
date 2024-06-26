import "../styles/BtnCv.scss";
import Cv from "../../public/destree_guillaume_cv.pdf"

const BtnCv = () => {
  return (
    <div className="btnCv">
      <a
        href={Cv}
        download={Cv}
      >
        Téléchargez mon CV !
      </a>
    </div>
  );
};

export default BtnCv;
