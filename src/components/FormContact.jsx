import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/FormContact.scss";


const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const form = useRef();

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const email = e.target.user_email.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Veuillez entrer une adresse email valide.");
      return;
    }

    if (!isCheckboxChecked) {
      setMessage("Veuillez accepter le traitement des données personnelles.");
      return;
    }

    emailjs
      .sendForm(
        "service_e12a3vx", // Remplace par ton Service ID
        "template_vyop4an", // Remplace par ton Template ID
        form.current,
        { publicKey: "tr7BUK0QznFQoCsss" }
      )
      .then(
        () => {
          setMessage("Message envoyé avec succès !");
          console.log("SUCCESS!");
        },
        (error) => {
          setMessage("Une erreur s'est produite, veuillez réessayer.");
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="waitForm">
      <form ref={form} className="formContact" onSubmit={sendEmail}>
        <div className="infoContainer">
          <div className="nameContainer">
            <div className="nameContainer__lastname">
              <label htmlFor="lastname">Nom et Prénom:<br/></label>
              <input
                type="text"
                id="lastname"
                placeholder="ex: Bond James"
                name="from_name"
                required
              />
            </div>
            
          </div>
          <div className="infoContainer__email">
            <label htmlFor="email">Email:<br/></label>
            <input
              type="email"
              id="email"
              placeholder="ex: luke.skywalker@r2d2.com"
              name="user_email"
              required
            />
          </div>
          <div className="infoContainer__msg">
            <label htmlFor="message">Message:<br/></label>
            <textarea
              id="message"
              placeholder="Votre message ici..."
              name="message"
              required
            />
          </div>
        </div>
        <div className="infoContainer__checkbox">
          <input
            type="checkbox"
            id="acceptData"
            checked={isCheckboxChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="acceptData">
            J&apos;accepte le traitement de mes données personnelles.
          </label>
        </div>
        <input type="submit" value="Envoyer" className="formContact__btn" />
      </form>
      {message && <p className="waitForm__formMessage">{message}</p>}
    </div>
  );
};

export default ContactForm;
