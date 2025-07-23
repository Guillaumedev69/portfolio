import { useEffect, useState } from "react";
import "../styles/Tarifs.scss";

const Tarifs = () => {
  const [tarifs, setTarifs] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setTarifs(data.tarifs.sort((a, b) => a.order - b.order)))
      .catch((err) => console.error("Erreur chargement tarifs :", err));
  }, []);

  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="tarifContainer">
      {tarifs.map((tarif) => {
        const hasMore =
          tarif.details ||
          tarif.detailsMore ||
          tarif.options ||
          tarif.tarifOptions;

        return (
          <div className="tarifContainer__cards" key={tarif.id}>
            <h3 className="tarifContainer__title">{tarif.title}</h3>
            <p className="tarifContainer__description">{tarif.description}</p>
            {tarif.tarif && (
              <h4 className="tarifContainer__price">
                À partir de {tarif.tarif}
              </h4>
            )}

            {expandedCards[tarif.id] && hasMore && (
              <>
                {tarif.details && (
                  <div className="tarifContainer__description">
                    <h4>Fonctionnalités incluses :</h4>
                    <p>{tarif.details}</p>
                  </div>
                )}
                {tarif.detailsMore && (
                  <div className="tarifContainer__description">
                    <h4>Pourquoi choisir cette offre ?</h4>
                    <p>{tarif.detailsMore}</p>
                  </div>
                )}
                {tarif.options && (
                  <div className="tarifContainer__description">
                    <h4>Contrat de maintenance (en option) :</h4>
                    <p>{tarif.options}</p>
                  </div>
                )}
                {tarif.tarifOptions && (
                  <h4 className="tarifContainer__price">
                    À partir de {tarif.tarifOptions}
                  </h4>
                )}
              </>
            )}

            {hasMore && (
              <button
                className="tarifContainer__button"
                onClick={() => toggleCard(tarif.id)}
              >
                {expandedCards[tarif.id] ? "Voir moins" : "Voir plus"}
              </button>
            )}

            <a href="/#contact" className="tarifContainer__link">
              Devis gratuit
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Tarifs;
