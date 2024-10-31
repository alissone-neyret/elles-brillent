import './Homepage.css'
import { Footer } from './Footer'
import { Header } from './Header'

export const Homepage = () => {
  return (
    <div className="homepage">
      <Header />

      <main>
        <section>
          <div>
            <h2>Elles brillent, c'est quoi ?</h2>
            <p>
              C'est un évènement en live et en ligne dans lequel je reçois 3
              étoiles de la Tech (dev, designer, product manager, CTO etc.) pour
              une interview de 25 min chacune.
            </p>
            <p>
              Chaque étoile est invitée pour aborder un sujet précis. Dans Elles
              brillent, on parle de parcours, on met en avant des réalisations, mais on aborde aussi des sujets peu
              visibles.
            </p>
          </div>
        </section>
        <section>
          <h2>Inscription</h2>
          <p>
            Pour être informé en avant-première des invitées, des dates et bien
            plus encore, inscris-toi
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
                placeholder="Email"
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
        </section>
      </main>

      <Footer />
    </div>
  )
}
