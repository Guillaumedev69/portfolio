import { useState } from "react";
import "../styles/FormContact.scss";
import BtnContact from "./BtnContact";

const ContactForm = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(
      "Le formulaire n'est pas encore actif merci de me contacter via le bouton ci-dessous"
    );
  };

  return (
    <div className="waitForm">
      <form method="post" className="formContact" onSubmit={handleSubmit}>
        <div className="infoContainer">
          <div className="nameContainer">
            <div className="nameContainer__lastname">
              <label htmlFor="lastname">Nom:</label>
              <input
                type="text"
                id="lastname"
                placeholder="ex: Bond"
                name="user_name"
              />
            </div>
            <div className="nameContainer__firstname">
              <label htmlFor="firstname">Prénom:</label>
              <input
                type="text"
                id="firstname"
                placeholder="ex: James"
                name="user_firstname"
              />
            </div>
          </div>
          <div className="infoContainer__email">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="ex: luke.skywalker@r2d2.com"
              name="user_email"
            />
          </div>
          <div className="infoContainer__msg">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              placeholder="ex:“Vous savez, moi je ne crois pas qu'il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd'hui avec vous, je dirais que c'est d'abord des rencontres…”"
              name="message"
            />
          </div>
        </div>
        <BtnContact />
        <input type="submit" value="Envoyer" className="formContact__btn" />
      </form>
      {message && <p className="waitForm__formMessage">{message}</p>}
    </div>
  );
};

export default ContactForm;
