import './Homepage.css'
import GuestsIllustration from '../../assets/guests.svg'
import InscriptionIllustration from '../../assets/inscription.svg'
import ParticipationIllustration from '../../assets/participate.svg'
import WhatIllustration from '../../assets/what.svg'
import WhyIllustration from '../../assets/why.svg'

import { Link } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <main>
        <p className="hompegage_header_subtitle">
          Découvre les parcours inspirants de celles qui font briller la Tech
          <span style={{ fontWeight: 'bold' }}>
            {' '}
            mardi 26 novembre à 18h30
          </span>{' '}
          en direct sur Twitch.
        </p>
        <section className="homepage_what_section">
          <div>
            <h2>
              Qu'est-ce que <span className="--pink">c'est</span>&nbsp;?
            </h2>
            <p>
              Un évènement en live et en ligne dans lequel je reçois 3 étoiles
              de la Tech (dev, designer, product manager, CTO etc.) pour trois
              interviews de 25 min chacunes.
            </p>
            <p>
              Chaque étoile est invitée pour aborder un sujet précis. On parle
              de parcours, on met en avant des réalisations et on aborde aussi
              des sujets peu visibles (santé mentale, inclusivité, etc.).
            </p>
          </div>
          <img
            className="homepage_illustration --right"
            src={WhatIllustration}
            alt=""
          />
        </section>

        <section className="homepage_why_section">
          <img
            className="homepage_illustration --left"
            src={WhyIllustration}
            alt=""
          />
          <div>
            <h2>
              <span className="--pink">Pourquoi</span>&nbsp;?
            </h2>
            <p>
              Il y a 6 ans, je faisais le grand saut dans le développement web.
              Ce choix, riche en rebondissements, a été marqué par des moments
              de doute et d'euphorie. Mais une constante a illuminé mon parcours
              : la force du collectif.
            </p>
            <p>
              Chaque rencontre avec une autre développeuse était une source
              d'inspiration inépuisable. Grâce aux différentes communautés
              (discord, Slack) et aux réseaux sociaux (LinkedIn, X) j’ai pu
              rencontrer des dizaines de développeuses.
            </p>
            <p>
              C'est au cours d'une de ces conversations que l'idée d'Elles
              brillent a germé. Un évènement où nous pourrions partager nos
              expériences, nos réussites et nos défis, les sujets qui nous
              tiennent à cœur et où chaque personne pourrait trouver la
              motivation et l'inspiration dont elle a besoin.
            </p>
          </div>
        </section>

        <section className="homepage_guests_section">
          <div>
            <h2>
              Les <span className="--pink">invitées</span>
            </h2>
            <p>Pour la première édition, les 3 étoiles invitées sont :</p>
            <div className='homepage_guests_section_container'>
              <div>
                <h3 className='homepage_guests_section_title --gold'>Abeba Ngwe</h3>
                <Link to="https://www.linkedin.com/in/abebangwe/" target="_blank" >Voir profil</Link>
                <p>
                  Abeba vient de sortir son livre, "Réussir ses tests
                  techniques", le premier en français sur ce sujet, et elle nous
                  raconte la réalisation de ce projet.
                </p>
              </div>
              <div>
                <h3 className='homepage_guests_section_title --gold'>Vanessa Seva</h3>
                <Link to="https://www.linkedin.com/in/vanessasevauiux/" target='_blank'>Voir profil</Link>
                <p>
                  Après une reconversion dans le développement web, elle
                  enchaine avec une reconversion dans le design. Elle nous
                  raconte pourquoi.
                </p>
              </div>
              <div>
                <h3 className='homepage_guests_section_title --gold'>Angi Guyard</h3>
                <Link to="https://www.linkedin.com/in/angi-guyard/" target='_blank'>Voir profil</Link>
                <p>
                  On discutera de neurodiversité, autisme et comment vivre
                  ensemble en prenant en compte les caractéristiques et les
                  besoins de chacun.
                </p>
              </div>
            </div>
          </div>
          <img
            className="homepage_illustration --right"
            src={GuestsIllustration}
            alt=""
          />
        </section>

        <section className="homepage_participation_section --left">
          <img
            className="homepage_illustration --left"
            src={ParticipationIllustration}
            alt=""
          />
          <div>
            <h2>
              Pourquoi <span className="--pink">participer</span>&nbsp;?
            </h2>
            <ul>
              <li>
                Apprendre : Découvre les réalisations de ces étoiles et des
                sujets peu visibles
              </li>
              <li>Réseauter : Rejoins une communauté de passionnés</li>
              <li>S'inspirer : Laisse-toi inspirer par ces parcours riches</li>
              <li>
                Poser des questions : Interagis avec les invitées en direct
              </li>
            </ul>
          </div>
        </section>

        <section className="homepage_inscription_section">
          <div>
            <h2>
              S'<span className="--pink">inscrire</span>
            </h2>
            <p>
              Tu souhaites en savoir plus sur ces étoiles qui font bouger la
              tech ? Rejoins nous le{' '}
              <span style={{ fontWeight: 'bold' }}>
                26 novembre à 18h30 sur Twitch
              </span>{' '}
              pour une soirée riche en échanges et en découvertes.
            </p>
            <form
              method="POST"
              action="https://gmail.us17.list-manage.com/subscribe/post"
            >
              <input type="hidden" name="u" value="8b40db9ee1e5114d385e41c54" />
              <input type="hidden" name="id" value="540c5117ac" />
              <div className="homepage_section_registration">
                <label
                  className="homepage_section_registration_label"
                  htmlFor="MERGE0"
                >
                  Email
                </label>
                <input
                  className="homepage_section_registration_input"
                  type="text"
                  name="MERGE0"
                  id="MERGE0"
                  required
                />
              </div>
              <button
                type="submit"
                className="homepage_section_registration_button"
              >
                S'inscrire
              </button>
            </form>
          </div>
          <img
            className="homepage_illustration_inscription --right"
            src={InscriptionIllustration}
            alt=""
          />
        </section>
      </main>

      <Footer />
    </div>
  )
}
