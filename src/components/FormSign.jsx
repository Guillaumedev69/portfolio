import { useState } from "react";
import "../styles/FormSign.scss";

const FormSign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Mot de passe:", password);
  };

  const handleSignupClick = () => {
    console.log("Inscription");
  };

  return (
    <div className="form-sign-container">
      <form className="form-sign" onSubmit={handleLoginSubmit}>
        <div className="form-sign__input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-sign__input-group">
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="form-sign__login-btn">
          Connexion
        </button>
      </form>
      <button className="form-sign__signup-btn" onClick={handleSignupClick}>
        Inscription
      </button>
    </div>
  );
};

export default FormSign;
