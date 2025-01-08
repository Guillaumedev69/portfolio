import "../styles/Tarifs.scss";
import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY_TARIF;

const Tarifs = () => {
  const [tarifs, setTarifs] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/api/tarifs`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          const formattedTarifs = data.data
            .map((item) => ({
              id: item.id,
              title: item.title,
              description: item.description,
              details: item.details,
              detailsMore: item.detailsMore,
              tarif: item.tarif,
              options: item.options,
              tarifOptions: item.tarifOptions,
              order: item.order,
            }))
            .sort((a, b) => a.order - b.order);
          setTarifs(formattedTarifs);
        } else {
          console.error("Format inattendu :", data);
        }
      })
      .catch((err) => console.error("Erreur API :", err));
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
        const hasAdditionalContent =
          tarif.details || tarif.detailsMore || tarif.options || tarif.tarifOptions;

        return (
          <div className="tarifContainer__cards" key={tarif.id}>
            <h3 className="tarifContainer__title">{tarif.title}</h3>
            <p className="tarifContainer__description">{tarif.description}</p>
            {tarif.tarif && (
              <h4 className="tarifContainer__price">Tarif : à partir de {tarif.tarif}</h4>
            )}

            {expandedCards[tarif.id] && hasAdditionalContent && (
              <>
                {tarif.details && (
                  <div className="tarifContainer__description">
                    <h4>Fonctionnalités incluses :</h4>
                    <p>{tarif.details}</p>
                  </div>
                )}
                {tarif.detailsMore && (
                  <div className="tarifContainer__description">
                    <h4>Fonctionnalités essentielles :</h4>
                    <p>{tarif.detailsMore}</p>
                  </div>
                )}
                {tarif.options && (
                  <div className="tarifContainer__description">
                    <h4>Option de maintenance &#40;en supplément&#41; :</h4>
                    <p>{tarif.options}</p>
                  </div>
                )}
                {tarif.tarifOptions && (
                  <h4 className="tarifContainer__price">Tarif : {tarif.tarifOptions}</h4>
                )}
              </>
            )}

            {hasAdditionalContent && (
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
