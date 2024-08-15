import "../styles/Header.scss";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="logo-header">
        <a href="/#main">
          <h1>[ DEV_STRÉE ]</h1>
          <p>
            DÉVELOPPEMENT
            <br />
            WEB
          </p>
        </a>
      </div>
      <Nav/>
    </header>
  );
};

export default Header;
