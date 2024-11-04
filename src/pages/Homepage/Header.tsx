import type { FC } from 'react'
import Brush from '../../assets/brush.png'
import './Homepage.css'

export const Header: FC = () => {
  return (
    <header className="homepage_header">
      <div className="homepage_header_title_container">
        <h1 className="homepage_header_title">
          <span className="homepage_header_title__pink">Elles</span> BRILLENT
        </h1>
        <img className="homepage_header_background" src={Brush} alt="" />
      </div>
        {/* <img className="homepage_header_stars" src={Stars} alt="" /> */}
      <p className="hompegage_header_subtitle">
        Découvre les parcours inspirants de celles qui font briller la Tech
        <span style={{fontWeight: "bold"}}> Mardi 26 Novembre à 18h30</span> en direct sur Twitch.
      </p>
    </header>
  )
}
