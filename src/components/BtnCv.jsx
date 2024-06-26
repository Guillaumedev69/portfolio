import "../styles/BtnCv.scss";

const BtnCv = () => {
  return (
    <div className="btnCv">
      <a
        href="../../public/destree_guillaume_cv.pdf"
        download
      >
        Téléchargez mon CV !
      </a>
    </div>
  );
};

export default BtnCv;
