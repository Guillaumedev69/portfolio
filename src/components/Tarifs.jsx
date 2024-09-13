import "../styles/Tarifs.scss";
const Tarifs = () => {
    const tarif=[
        {

            title:"Tarif n°1",
            price:"1",
            description:"kjbhguhvugvjhvgui",
        },
        {

            title:"Tarif n°2",
            price:"2",
            description:"afaaefaefaefaefaf",
        },
        {

            title:"Tarif n°3",
            price:"3",
            description:"dqsdsdqsdefzrgtryjukyioluiyutyre",
        }
    ]
  return <div className="tarifContainer">
    <div className="tarifContainer__cards">
        <img src="" alt="" className="tarifContainer__img"/>
        <h3 className="tarifContainer__title">{tarif.title}</h3>
        <h4 className="tarifContainer__price"></h4>
        <p className="tarifContainer__description"></p>
        </div>    
  </div>;
};

export default Tarifs;
