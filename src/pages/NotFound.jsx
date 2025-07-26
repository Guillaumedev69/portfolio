import Footer from "../components/Footer";
import Header from "../components/Header";
import BtnContact from "../components/BtnContact";
import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <div className="NotFound">
      <Header />
      <div className="main404">
      <h1>Error - 404 - Not Found</h1>
      <h2>
        Merci de me contacter via le formulaire ou sur mes différents réseaux si
        cette page s&apos;affiche.{" "}
      </h2>
      <BtnContact />
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
