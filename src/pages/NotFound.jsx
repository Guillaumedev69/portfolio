import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/NotFound.scss"


const NotFound = () => {
    return (
        <div className="NotFound">
            <Header/>

            <p>ERROR-404</p>

            <Footer/>
            
        </div>
    );
};

export default NotFound;