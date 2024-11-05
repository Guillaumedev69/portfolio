import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Tarifs.scss";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
const Tarifs = () => {
  const tarifs = [
    {
      title: "Création de site vitrine",
      pricej: "2000",
      description: [
        "Création d'un site responsive",
        "Réferencement naturel (SEO)",
        "Support par mail",
        "Mise en ligne du site web",
        "Domaine et hébergement offerts la première année",
        "Maintenance comprise pendant 6 mois après livraison",
      ],
    },
    {
      title: "Intégration de site vitrine",
      pricej: "1500",
      description: [
        "Intégration d'une maquette fournie",
        "Réferencement naturel (SEO)",
        "Support par mail",
        "Mise en ligne du site web",
        "Domaine et hébergement offerts la première année",
        "Maintenance comprise pendant 6 mois après livraison",
      ],
    },
    {
      title: "Optimisation & Maintenance",
      pricea: "150",
      description: [
        "Analyse complète trimestrielle",
        "Correction de bugs",
        "Mise à jour des composants",
        "Petites modifications",
        "Mise en place d'un contrat de maintenance",
      ],
    },
    {
      title: "Analyse de votre site web",
      price: "Offert",
      description: [
        "Analyse détaillée du site web (Performance, SEO, Accessibilité)",
        "Recherche de bugs éventuels",
        "Analyse du responsive",
      ],
    },
  ];

  return (
    <div className="tarifContainer">
      {tarifs.map((tarif, index) => (
        <div className="tarifContainer__cards" key={index}>
          <h3 className="tarifContainer__title">{tarif.title}</h3>

          {tarif.pricej && (
            <h4 className="tarifContainer__price">
              À partir de {tarif.pricej} €
            </h4>
          )}
          {tarif.pricea && (
            <h4 className="tarifContainer__price">
              À partir de {tarif.pricea} €
            </h4>
          )}
          {tarif.price && (
            <h4 className="tarifContainer__price">{tarif.price}</h4>
          )}

          <ul className="tarifContainer__description">
            {tarif.description.map((item, idx) => (
              <li key={idx}>
                <FontAwesomeIcon icon={faCircleCheck} /> {item}
              </li>
            ))}
          </ul>
          <a href="/#contact" className="tarifContainer__link">
            Devis gratuit
          </a>
        </div>
      ))}
    </div>
  );
};

export default Tarifs;
