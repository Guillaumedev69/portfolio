import { useState } from "react";
import "../styles/BtnContact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const BtnContact = () => {
  const [isBulleVisible, setIsBulleVisible] = useState(false);
  const [isBtnInvisible, setIsBtnInvisible] = useState(false);

  const handleButtonClick = () => {
    setIsBulleVisible(!isBulleVisible); setIsBtnInvisible(!isBtnInvisible);
  };

  return (
    <div className="containerBulle">
      {!isBtnInvisible &&(<button className="btnContact" onClick={handleButtonClick}>
        Contactez-moi !
      </button>)}
      {isBulleVisible && (
        <div className="btnContact__bulle">
          <a href="mailto:devstree.guillaume@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="btnContact__icon" />
          </a>
          <a href="tel:+33788235392">
            <FontAwesomeIcon icon={faPhone} className="btnContact__icon" />
          </a>
          <button onClick={handleButtonClick}>
              <FontAwesomeIcon icon={faXmark} className="btnContact__icon close" />
            </button>
        </div>
      )}
    </div>
  );
};

export default BtnContact;
