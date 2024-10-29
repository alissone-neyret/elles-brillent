import React from "react";
import Brush from "../../assets/brush.png";
import Stars from "../../assets/stars.png";
import "./Homepage.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <header className="homepage_header">
        <div>
          <h1 className="homepage_header_title">
            <span className="homepage_header_title__pink">Elles</span> brillent
          </h1>
        </div>
        <img className="homepage_header_stars" src={Stars} alt="" />
        <img className="homepage_header_background" src={Brush} alt="" />
      </header>
      <section>
        <div>
          <h2>Elles brillent, c'est quoi ?</h2>
          <p>
            Il s’agit d’un évènement en live et en ligne dans lequel je reçois 3 étoiles de la Tech (dev, designer, product manager, CTO etc.) pour
            une interview de 25 min chacune. 
          </p>
          <p>
            Chaque étoile est invitée pour aborder un sujet précis. Dans
            Elles brillent, pas de sujet technique, on parle de parcours, on met
            en avant des réalisations, mais on aborde aussi des sujets peu
            visibles.
          </p>
        </div>
      </section>
      <section>
        <h2>Inscription</h2>
        <p>Pour être informé en avant première des invitées, de la date et de la plateforme où aura lieu l'évènement, inscrits-toi</p>
        <div className="homepage_section_registration">
          <label className="homepage_section_registration_label" htmlFor="email">Email</label>
          <input className="homepage_section_registration_input" type="text" placeholder="Email" name="email" id="email" />
        </div>
      </section>
    </div>
  );
};
