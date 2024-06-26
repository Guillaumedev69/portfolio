import "../styles/BtnCv.scss";

const BtnCv = () => {
  return (
    <div className="btnCv">
      <a
        href="../../public/destree_guillaume_cv.pdf"
        download="destree_guillaume_cv.pdf"
      >
        Téléchargez mon CV !
      </a>
    </div>
  );
};

export default BtnCv;
