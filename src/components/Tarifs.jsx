import "../styles/Tarifs.scss";
import { useEffect, useState } from "react";

const Tarifs = () => {
  const [tarifs, setTarifs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1337/api/tarifs", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer 1e425309596e7994544f36821b9173d94ab2e5a3e48f1620265eadf14fd3b38d011e6ad5ccf86481726d4bd9ba38f11f9e9d86cf999fb6b70d773394966084dcb973cf0a730f72cd9f2190798eb4c9409c95f6a41dd6b9ae8e678d2b9f451a9eb224f93a708bec305a5cf3e4dcaee6d52f132a0be466ee3042ea1ac0d6eddc08",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Réponse API :", data);
        if (data && data.data) {
          const formattedTarifs = data.data.map((item) => ({
            id: item.id,
            ...item,
          }));
          setTarifs(formattedTarifs);
        } else {
          console.error("Format inattendu :", data);
        }
      })
      .catch((err) => console.error("Erreur API :", err));
  }, []);
  return (
    <div className="tarifContainer">
      {tarifs.map((tarif, index) => (
        <div className="tarifContainer__cards" key={index}>
          <h3 className="tarifContainer__title">
            {tarif.title || "Sans titre"}
          </h3>
          <div className="tarifContainer__description">
            <h4>Description:</h4>
            <p>{tarif.description}</p>
          </div>
          <div className="tarifContainer__description">
            <h4>Fonctionnalités incluses :</h4>
            <p>{tarif.details}</p>
          </div>
          <h4 className="tarifContainer__price">Tarif : à partir de {tarif.tarif}</h4>
          <div className="tarifContainer__description">
            <h4>Option de maintenance (en supplément) :</h4>
            <p>{tarif.options}</p>
          </div>
          <h4 className="tarifContainer__price">Tarif : {tarif.tarifOptions}</h4>
          <a href="/#contact" className="tarifContainer__link">
            Devis gratuit
          </a>
        </div>
      ))}
    </div>
  );
};

export default Tarifs;
