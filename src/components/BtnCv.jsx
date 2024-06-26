import "../styles/BtnCv.scss"

const BtnCv = () => {
  return (
    <div className="btnCv">
      <a href="../../public/Destree_guillaumeCV.pdf" download="Destree_guillaumeCV.pdf">
        <button type="button">
          Téléchargez mon CV !
        </button>
      </a>
    </div>
  );
};

export default BtnCv;
